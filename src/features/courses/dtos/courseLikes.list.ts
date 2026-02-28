import { Expose, Type } from "class-transformer";
import { User } from "src/auth/user/entities/user.entity";
import { Course } from "../entities/course.entity";


export class CourseLikesListDto {

    @Expose()
    @Type(() => User)
    userId: number;

    @Expose()
    @Type(() => Course)
    courseId: number;
    
    @Expose()
    date: Date;
}