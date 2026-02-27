import { LoginType } from "src/common/enums/enums";
import { BaseModel } from "src/core/base-model";
import { BookLikes } from "src/features/books/entities/bookLikes.entity";
import { BookReview } from "src/features/books/entities/bookReview.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { UserLessons } from "../../../features/courses/entities/userLessons.entity";
import { OtpCodes } from "src/auth/verification/otpCodes.entity";
import { CourseReview } from "src/features/courses/entities/courseReview.entity";
import { CourseLikes } from "src/features/courses/entities/courseLikes.entity";
import { PurchasedCourses } from "src/features/courses/entities/purchasedCourses.entity";
import { NewsView } from "src/features/news/entities/newsView.entity";

@Entity("users")
export class User extends BaseModel {
    @Column({length: 64})
    fullname: string;

    @Column({length: 128, nullable: true})
    profileImage: string;

    @Column({length: 64, unique: true})
    login: string;

    @Column({type: "enum", enum: LoginType})
    loginType: LoginType;

    @Column({length: 128})
    password: string;

    @Column({type: "date"})
    birthDate: Date;

    @Column({type: "boolean", default: false})
    isVerified: boolean

    @Column({type: "boolean", default: false})
    isActive: boolean


    @OneToMany(() => BookReview, br => br.user)
    bookReview: BookReview[];

    @OneToMany(() => BookLikes, bl => bl.user)
    bookLikes: BookLikes[];

    @OneToMany(() => UserLessons, ul => ul.user)
    userLessons: UserLessons[];

    @OneToMany(() => OtpCodes, oc => oc.user)
    otpCodes: OtpCodes[];

    @OneToMany(() => CourseReview, cr => cr.user)
    courseReview: CourseReview[];

    @OneToMany(() => CourseLikes, cl => cl.user)
    courseLikes: CourseLikes[];

    @OneToMany(() => PurchasedCourses, pc => pc.user)
    purchasedCourses: PurchasedCourses[];

    @OneToMany(() => NewsView, nv => nv.user)
    newsView: NewsView[];
}