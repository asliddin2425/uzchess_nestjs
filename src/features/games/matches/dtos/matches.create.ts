import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { MatchType, WinnerType } from "src/common/enums/enums";

export class MatchesCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    firstPlayerId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    firstPlayerResult: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    secondPlayerId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    secondPlayerResult: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(MatchType)
    type: MatchType;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    moves: number;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(WinnerType)
    winner: WinnerType;
}