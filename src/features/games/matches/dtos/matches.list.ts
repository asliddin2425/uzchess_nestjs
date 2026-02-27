import { Expose, Type } from "class-transformer";
import { Players } from "../../players/players.entity";
import { Matches } from "../matches.entity";
import { MatchType, WinnerType } from "src/common/enums/enums";

export class MatchesListDto {
    @Expose()
    @Type(() => Matches)
    firstPlayerId: number;

    @Expose()
    firstPlayerResult: number;

    @Expose()
    @Type(() => Matches)
    secondPlayerId: number;

    @Expose()
    secondPlayerResult: number;

    @Expose()
    type: MatchType;

    @Expose()
    moves: number;

    @Expose()
    date: Date;

    @Expose()
    winner: WinnerType;
}