import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Matches } from "../matches/matches.entity";
import {Country} from "../../../common/countries/countries.entity"

@Entity("players")
export class Players extends BaseModel {
    @Column()
    countryId: number;

    @Column({length: 64})
    fullName: string;

    @Column({length: 128, nullable: true})
    image: string;

    @Column({nullable: true})
    classic: number;

    @Column({nullable: true})
    rapid: number;

    @Column({nullable: true})
    blitz: number

    @OneToMany(() => Matches, m => m.firstPlayer)
    matches: Matches[];

    @OneToMany(() => Matches, m => m.secondPlayer)
    match: Matches[];

    @ManyToOne(() => Country, c => c.players, {onDelete: "CASCADE"})
    @JoinColumn({name: "countryId"})
    country: Country;
}