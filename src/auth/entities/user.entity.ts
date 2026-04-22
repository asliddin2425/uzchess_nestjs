import { LoginType } from 'src/core/enums/loginType.enum';
import { BaseModel } from 'src/core/base-model';
import { BookLikes } from 'src/features/books/entities/bookLikes.entity';
import { BookReview } from 'src/features/books/entities/bookReview.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { UserLessons } from '../../features/courses/entities/userLessons.entity';
import { OtpCodes } from 'src/auth/entities/otpCodes.entity';
import { CourseReview } from 'src/features/courses/entities/courseReview.entity';
import { CourseLikes } from 'src/features/courses/entities/courseLikes.entity';
import { PurchasedCourses } from 'src/features/courses/entities/purchasedCourses.entity';
import { NewsView } from 'src/features/news/entities/newsView.entity';

@Entity('users')
export class User extends BaseModel {
  @Column({ length: 64 })
  fullName: string;

  @Column({ length: 128, nullable: true })
  profileImage: string;

  @Column({ length: 64, unique: true })
  login: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType: LoginType;

  @Column({ length: 128, nullable: true })
  password: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @OneToMany(() => BookReview, (br) => br.user)
  bookReview: Relation<BookReview[]>;

  @OneToMany(() => BookLikes, (bl) => bl.user)
  bookLikes: Relation<BookLikes[]>;

  @OneToMany(() => UserLessons, (ul) => ul.user)
  userLessons: Relation<UserLessons[]>;

  @OneToMany(() => OtpCodes, (oc) => oc.user)
  otpCodes: Relation<OtpCodes[]>;

  @OneToMany(() => CourseReview, (cr) => cr.user)
  courseReview: Relation<CourseReview[]>;

  @OneToMany(() => CourseLikes, (cl) => cl.user)
  courseLikes: Relation<CourseLikes[]>;

  @OneToMany(() => PurchasedCourses, (pc) => pc.user)
  purchasedCourses: Relation<PurchasedCourses[]>;

  @OneToMany(() => NewsView, (nv) => nv.user)
  newsView: Relation<NewsView[]>;
}
