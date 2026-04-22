import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import argon2 from 'argon2';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignUpDto } from '../dtos/sign-up.dto';
import { OtpCodeService } from '../services/otpCode.service';
import { OtpType } from '../../core/enums/otpType.enum';
import { VerifyOtpDto } from '../dtos/verify-otp.dto';
import { ResendOtpDto } from '../dtos/resend-otp.dto';
import { OtpCodes } from '../entities/otpCodes.entity';
import { SetPasswordDto } from '../dtos/set-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly otpService: OtpCodeService,
  ) {}

  async signUp(payload: SignUpDto) {
    const user = await User.countBy({ login: payload.login });
    if (user) {
      throw new BadRequestException('User with given login already exists');
    }

    const newUser = User.create(payload as User);
    await User.save(newUser);
    await this.otpService.sendOtp(newUser, OtpType.register);
  }

  async signIn({ login, password }: SignInDto) {
    const user = await User.findOneBy({ login });
    if (!user || !user.password) {
      throw new UnauthorizedException();
    }

    if (!user.isActive || !user.isVerified) {
      throw new UnauthorizedException();
    }

    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerErrorException('No secret key found');
    }

    const passwordsMatch = await argon2.verify(
      user.password,
      password + secretKey,
    );
    if (!passwordsMatch) {
      throw new UnauthorizedException();
    }

    const userPayload = {
      id: user.id,
      login: user.login,
    };

    const accessToken = this.jwtService.sign(userPayload);

    return { accessToken: accessToken };
  }

  async verifyOtp({ login, code }: VerifyOtpDto) {
    const user = await User.findOneBy({ login });
    if (!user) {
      throw new BadRequestException('User with given login does not exist');
    }

    const otpValid = await this.otpService.verifyOtp(user.id, code);
    if (!otpValid) {
      throw new BadRequestException('Code invalid');
    }

    user.isVerified = true;
    await User.save(user);
  }
  async setPassword(payload: SetPasswordDto) {
    const user = await User.findOneBy({ login: payload.login });
    if (!user) {
      throw new NotFoundException('Does not exist');
    }

    const otpCode = await OtpCodes.findOneBy({
      userId: user.id,
      code: payload.code,
      type: OtpType.register,
    });
    if (!otpCode) {
      throw new BadRequestException('Code is wrong');
    }

    user.password = await argon2.hash(payload.password);

    await User.save(user);
  }

  async resendOtp({ login, loginType }: ResendOtpDto) {
    const user = await User.findOneBy({ login, loginType });
    if (!user) {
      throw new NotFoundException(
        'User with given login and loginType does not exist',
      );
    }

    const otpExpire = Number(process.env.OTP_EXPIRE) * 1000;

    const lastOtp = await OtpCodes.findOne({
      where: { userId: user.id },
      order: { createdAt: 'DESC' },
    });

    if (lastOtp) {
      const difference = Date.now() - Date.parse(lastOtp.createdAt);
      if (difference < otpExpire) {
        throw new BadRequestException('Code not expired yet');
      }
    }

    await this.otpService.sendOtp(user, OtpType.register);
  }
}
