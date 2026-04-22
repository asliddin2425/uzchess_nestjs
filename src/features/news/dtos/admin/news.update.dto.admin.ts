import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class NewsUpdateDtoAdmin {
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  content: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty()
  date: string;
}
