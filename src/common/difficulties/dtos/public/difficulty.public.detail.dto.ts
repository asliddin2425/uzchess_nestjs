import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';

export class DifficultyPublicDetailDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  @IsString()
  @MaxLength(32)
  title: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @MaxLength(128)
  icon: string;
}
