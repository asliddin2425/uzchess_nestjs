import { BaseModel } from 'src/core/base-model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';
import { User } from 'src/auth/entities/user.entity';
import type { Relation } from 'typeorm';
@Entity('courseReview')
export class CourseReview extends BaseModel {
  @Column()
  userId: number;

  @Column()
  courseId: number;

  @Column()
  rating: number;

  @Column({ length: 512, nullable: true })
  comment: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => Course, (c) => c.courseReview, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Relation<Course>;

  @ManyToOne(() => User, (u) => u.courseReview, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;
}
