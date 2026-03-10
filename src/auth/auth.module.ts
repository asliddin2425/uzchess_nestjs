import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OtpCodeService } from '../auth/services/otpCode.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { OtpCodes } from './entities/otpCodes.entity';
import { AuthController } from './controllers/auth.controller';
import { jwtModuleConfig } from 'src/config/jwt-module.config';
@Module({
  imports: [ TypeOrmModule.forFeature([User, OtpCodes]),
    JwtModule.register(jwtModuleConfig)
  ],
  controllers: [AuthController, UserController],
  providers: [AuthService, OtpCodeService, UserService],
})
export class AuthModule {}