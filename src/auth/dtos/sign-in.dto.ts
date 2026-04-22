import { ApiProperty } from '@nestjs/swagger';
import { IsString, Max, MaxLength } from 'class-validator';

export class SignInDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login: string;

  @IsString()
  @MaxLength(32)
  @ApiProperty()
  password: string;
}
