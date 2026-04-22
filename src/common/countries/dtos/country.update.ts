import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CountryUpdateDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(64)
  title: string;
}
