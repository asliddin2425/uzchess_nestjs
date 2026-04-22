import { BaseModel } from 'src/core/base-model';
import { Players } from 'src/features/matches/entities/players.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
@Entity('country')
export class Country extends BaseModel {
  @Column({ length: 64 })
  title: string;

  @OneToMany(() => Players, (p) => p.country)
  players: Relation<Players[]>;
}
