import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional } from "class-validator";
import { MatchType, WinnerType } from "src/common/enums/enums";

export class MatchesCreateDto {
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

    @ApiProperty()
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

    @ApiProperty()
    @IsOptional()
    @IsEnum(WinnerType)
    winner: WinnerType;
}