import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NewsDetailPublicDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  image: string;

  @ApiProperty()
  @Expose()
  content: string;

  @ApiProperty()
  @Expose()
  date: string;

  // @ApiProperty()
  // @Expose()
  // views: number;
}
