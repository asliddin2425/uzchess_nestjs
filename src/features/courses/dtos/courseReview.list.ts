import { Expose, Type } from "class-transformer";
import { User } from "src/auth/user/entities/user.entity";
import { Course } from "../entities/course.entity";

export class CourseReviewListDto {
    @Expose()
    @Type(() => User)    
    userId: number;

    @Expose()
    @Type(() => Course)
    courseId: number;

    @Expose()
    rating: number;

    @Expose()
    comment?: string;

    @Expose()
    date: Date;
}