import { Expose, Type } from "class-transformer";
import { Course } from "../entities/course.entity";
import { CourseSection } from "../entities/courseSection.entity";

export class CourseLessonListDto {
    @Expose()
    @Type(() => Course)
    courseId: number

    @Expose()
    @Type(() => CourseSection)
    courseSectionId: number;

    @Expose()
    title: number;

    @Expose()
    content: string;

    @Expose()
    thumbnail: string;

    @Expose()
    video: string;

    @Expose()
    order: number;

    @Expose()
    date: Date;

    @Expose()
    isFree: boolean;
}