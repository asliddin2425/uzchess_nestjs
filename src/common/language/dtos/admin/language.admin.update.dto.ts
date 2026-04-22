import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class LanguageAdminUpdateDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(32)
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(2)
  code: string;
}
