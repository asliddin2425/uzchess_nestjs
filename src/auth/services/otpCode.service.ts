import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { OtpCodes } from '../entities/otpCodes.entity';
import { OtpType } from '../../core/enums/otpType.enum';

@Injectable()
export class OtpCodeService {
  async sendOtp(user: User, type: OtpType) {
    await this.deleteOtps(user.id);

    const otpCode = OtpCodes.create({
      userId: user.id,
      code: this.generateOtp(),
      type: type,
    });

    await OtpCodes.save(otpCode);
    console.log(otpCode);
    // TODO: otpni haqiqiy send qilish shu yerda bo'ladi
  }

  async verifyOtp(userId: number, code: string) {
    const otpCode = await OtpCodes.findOneBy({ userId: userId });

    if (!otpCode || otpCode.code !== code) {
      throw new BadRequestException('Codes do not match');
    }

    const otpExpire = Number(process.env.OTP_EXPIRE) * 1000; // millisekundda
    const difference = Date.now() - Date.parse(otpCode.createdAt);
    if (difference > otpExpire) {
      throw new BadRequestException('Code expired');
    }

    return true;
  }

  private generateOtp(): string {
    const otpCode = Math.floor(Math.random() * 1_000_000).toString(10);
    const code: any[] = [];
    for (let i = 0; i < 6 - otpCode.length; i++) {
      code.push(0);
    }

    code.push(otpCode);

    return code.join();
  }

  private async deleteOtps(userId: number) {
    const otpCodes = await OtpCodes.findBy({ userId });
    await OtpCodes.remove(otpCodes);
  }
}
