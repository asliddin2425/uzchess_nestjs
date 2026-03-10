import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { MatchType } from "src/core/enums/matchType.enum";
import { WinnerType } from "src/core/enums/winnerType.enum";
export class MatchCreateDto {
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