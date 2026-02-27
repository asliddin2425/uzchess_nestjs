import { MatchType, WinnerType } from "src/common/enums/enums";
import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Players } from "../players/players.entity";

@Entity("matches")
export class Matches extends BaseModel {
    @Column()
    firstPlayerId: number;

    @Column()
    firstPlayerResult: number;

    @Column()
    secondPlayerId: number;

    @Column()
    secondPlayerResult: number;
    
    @Column({type: "enum", enum: MatchType})
    type: MatchType;

    @Column()
    moves: number;

    @Column({type: "timestamp"})
    date: Date;
    
    @Column({type: "enum", enum: WinnerType})
    winner: WinnerType;

    @ManyToOne(() => Players, p => p.matches, {onDelete: "CASCADE"})
    @JoinColumn({name: "firstPlayerId"})
    firstPlayer: Players;

    @ManyToOne(() => Players, p => p.matches, {onDelete: "CASCADE"})
    @JoinColumn({name: "secondPlayerId"})
    secondPlayer: Players;
}