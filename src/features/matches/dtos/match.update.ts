import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { MatchType } from 'src/core/enums/matchType.enum';
import { WinnerType } from 'src/core/enums/winnerType.enum';

export class MatchCreateDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  firstPlayerId: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  firstPlayerResult: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  secondPlayerId: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  secondPlayerResult: number;

  @ApiProperty({enum: MatchType})
  @IsOptional()
  @IsEnum(MatchType)
  type: MatchType;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  moves: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date: Date;

  @ApiProperty({enum: WinnerType})
  @IsOptional()
  @IsEnum(WinnerType)
  winner: WinnerType;
}
