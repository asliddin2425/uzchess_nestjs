import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class AuthorAdminCreateDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  fullName: string;
}
