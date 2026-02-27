import { Expose, Type } from "class-transformer";
import { ReportCategory } from "../entities/reportCategory.entity";
import { ReportType } from "src/common/enums/enums";

export class ReportListDto {
    @Expose()
    @Type(() => ReportCategory)
    reportCategoryId: number;

    @Expose()
    target: ReportType;

    @Expose()
    description: string;
    
    @Expose()
    date: Date;

}