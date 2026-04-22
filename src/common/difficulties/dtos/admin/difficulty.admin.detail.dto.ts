import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class DifficultyAdminDetailDto {
  @ApiProperty()
  @IsString()
  @MaxLength(32)
  title: string;

  @ApiProperty()
  @IsString()
  @MaxLength(128)
  icon: string;
}
