import { OtpType } from 'src/core/enums/otpType.enum';
import { BaseModel } from 'src/core/base-model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { User } from '../entities/user.entity';
@Entity('otpCodes')
export class OtpCodes extends BaseModel {
  @Column()
  userId: number;

  @Column({ length: 6 })
  code: string;

  @Column({ type: 'enum', enum: OtpType })
  type: OtpType;

  @ManyToOne(() => User, (u) => u.otpCodes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;
}
