import { Expose, Type } from "class-transformer";
import { Match } from "../entities/match.entity";
import { MatchType} from "src/core/enums/matchType.enum";
import { WinnerType } from "src/core/enums/winnerType.enum";
import { ApiProperty } from "@nestjs/swagger";

export class MatchListDto {
   
    @Expose()
    @ApiProperty()
    @Type(() => Match)
    firstPlayerId: number;

    @Expose()
    @ApiProperty()
    firstPlayerResult: number;

    @Expose()
    @ApiProperty()
    @Type(() => Match)
    secondPlayerId: number;

    @Expose()
    @ApiProperty()
    secondPlayerResult: number;

    @Expose()
    @ApiProperty()
    type: MatchType;

    @Expose()
    @ApiProperty()
    moves: number;

    @Expose()
    date: Date;

    @Expose()
    winner: WinnerType;
}