import { MatchType, WinnerType } from "src/common/enums/enums";
import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Players } from "../../matches/entities/players.entity";
import type { Relation } from "typeorm";
@Entity("matches")
export class Match extends BaseModel {
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
    firstPlayer: Relation<Players[]>;

    @ManyToOne(() => Players, p => p.matches, {onDelete: "CASCADE"})
    @JoinColumn({name: "secondPlayerId"})
    secondPlayer: Relation<Players[]>;
}