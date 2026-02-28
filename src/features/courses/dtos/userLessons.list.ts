import { Expose, Type } from "class-transformer";
import { User } from "src/auth/user/entities/user.entity";
import { CourseLessons } from "../entities/courseLesson.entity";

export class UserLessonsListDto {
    @Expose()
    @Type(() => User)
    userId: number;

    @Expose()
    @Type(() => CourseLessons)
    courseLessonId: number;

    @Expose()
    stoppedAt: number;

    @Expose()
    isCompleted: boolean;
}