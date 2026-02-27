import { Expose, Type } from "class-transformer";
import { Course } from "../entities/course.entity";

export class CourseSectionListDto {
    @Expose()
    @Type(() => Course)
    courseId: number;

    @Expose()
    title: string;

    @Expose()
    order: number;

    @Expose()
    date: Date;
}