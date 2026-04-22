import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: string;
}
