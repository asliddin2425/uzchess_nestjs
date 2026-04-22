import { User } from 'src/auth/entities/user.entity';
import { BaseModel } from 'src/core/base-model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';
import type { Relation } from 'typeorm';
@Entity('purchasedCourses')
export class PurchasedCourses extends BaseModel {
  @Column()
  userId: number;

  @Column()
  courseId: number;

  @Column({ type: 'boolean', default: false })
  isCompleted: boolean;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => User, (u) => u.purchasedCourses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;

  @ManyToOne(() => Course, (c) => c.purchasedCourses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Relation<Course>;
}
