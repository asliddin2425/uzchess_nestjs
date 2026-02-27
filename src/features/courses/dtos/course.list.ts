import { Expose, Type } from "class-transformer";
import { Author } from "src/common/authors/author.entity";
import { CourseCategory } from "../entities/courseCategory.entity";
import { Languages } from "src/common/language/language.entity";
import { Difficulties } from "src/common/difficulties/difficulties.entity";

export class CourseListDto {
    @Expose()
    @Type(() => Author)
    authorId: number;

    @Expose()
    @Type(() => CourseCategory)
    categoryId: number;

    @Expose()
    @Type(() => Languages)
    languageId: number

    @Expose()
    @Type(() => Difficulties)
    difficultyId: number;

    @Expose()
    title: string;

    @Expose()
    image: string;

    @Expose()
    price: number;

    @Expose()
    newPrice: number;

    @Expose()
    reviewCounts: number;

    @Expose()
    rating: number;

    @Expose()
    sectionCount: number;

    @Expose()
    lessonCount: number;
}