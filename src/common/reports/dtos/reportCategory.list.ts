import { Expose } from "class-transformer";

export class ReportCategoryListDto {
    @Expose()
    title: string;

    @Expose()
    order: string;
}