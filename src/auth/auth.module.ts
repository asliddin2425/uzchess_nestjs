import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OtpCodeService } from '../auth/services/otpCode.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthorController } from 'src/common/authors/controllers/author.controller';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { OtpCodes } from './entities/otpCodes.entity';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([User, OtpCodes]),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: '3h',
      },
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [AuthService, OtpCodeService, UserService],
})
export class AuthModule {}