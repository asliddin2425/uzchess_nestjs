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
import { OtpType } from '../../common/enums/enums';
import { VerifyOtpDto } from '../dtos/verify-otp.dto';
import { ResendOtpDto } from '../dtos/resend-otp.dto';
import { OtpCodes } from '../entities/otpCodes.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly otpService: OtpCodeService,
  ) {}

  async signUp(payload: SignUpDto) {
    let user = await User.countBy({ login: payload.login });
    if (user) {
      throw new BadRequestException('User with given login already exists');
    }

    let newUser = User.create(payload as User);
    await User.save(newUser);
    await this.otpService.sendOtp(newUser, OtpType.register);
  }

  async signIn({ login, password }: SignInDto) {
    let user = await User.findOneBy({ login });
    if (!user || !user.password) {
      throw new UnauthorizedException();
    }

    if (!user.isActive || !user.isVerified) {
      throw new UnauthorizedException();
    }

    let secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerErrorException('No secret key found');
    }

    let passwordsMatch = await argon2.verify(user.password, password + secretKey);
    if (!passwordsMatch) {
      throw new UnauthorizedException();
    }

    let userPayload = {
      id: user.id,
      login: user.login,
    };

    let accessToken = this.jwtService.sign(userPayload);

    return { accessToken: accessToken };
  }

  async verifyOtp({ login, code }: VerifyOtpDto) {
    let user = await User.findOneBy({ login });
    if (!user) {
      throw new BadRequestException('User with given login does not exist');
    }

    let otpValid = await this.otpService.verifyOtp(user.id, code);
    if (!otpValid) {
      throw new BadRequestException('Code invalid');
    }

    user.isVerified = true;
    await User.save(user);
  }

  async setPassword(){

  }

  async resendOtp({ login, loginType }: ResendOtpDto) {
    let user = await User.findOneBy({ login, loginType });
    if (!user) {
      throw new NotFoundException('User with given login and loginType does not exist');
    }

    let otpExpire = Number(process.env.OTP_EXPIRE) * 1000;

    let lastOtp = await OtpCodes.findOne({
      where: { userId: user.id },
      order: { createdAt: 'DESC' },
    });

    if (lastOtp) {
      let difference = Date.now() - Date.parse(lastOtp.createdAt);
      if (difference < otpExpire) {
        throw new BadRequestException('Code not expired yet');
      }
    }

    await this.otpService.sendOtp(user, OtpType.register);
  }
}