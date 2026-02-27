import { Expose } from "class-transformer";

export class CourseCategoryListDto {
    @Expose()
    title: string;
}