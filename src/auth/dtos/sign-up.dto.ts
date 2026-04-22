import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { LoginType } from 'src/core/enums/loginType.enum';

export class SignUpDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  fullName: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login: string;

  @IsEnum(LoginType)
  @ApiProperty({ enum: LoginType })
  loginType: LoginType;
}
