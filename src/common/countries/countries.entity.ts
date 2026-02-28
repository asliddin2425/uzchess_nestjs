import { BaseModel } from "src/core/base-model";
import { Players } from "src/common/players/players.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("country")
export class Country extends BaseModel {

    @Column({length: 64})
    title: string;

    @Column({length: 128})
    flag: string;

    @OneToMany(() => Players, p => p.country)
    players: Players;
}