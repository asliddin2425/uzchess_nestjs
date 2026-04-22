import { BaseModel } from 'src/core/base-model';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Match } from './match.entity';
import { Country } from '../../../common/countries/countries.entity';
import type { Relation } from 'typeorm';
@Entity('players')
export class Players extends BaseModel {
  @Column()
  countryId: number;

  @Column({ length: 64 })
  fullName: string;

  @Column({ nullable: true })
  classic: number;

  @Column({ nullable: true })
  rapid: number;

  @Column({ nullable: true })
  blitz: number;

  @OneToMany(() => Match, (m) => m.firstPlayer)
  matches: Relation<Match[]>;

  @OneToMany(() => Match, (m) => m.secondPlayer)
  match: Relation<Match[]>;

  @ManyToOne(() => Country, (c) => c.players, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'countryId' })
  country: Relation<Country>;
}
