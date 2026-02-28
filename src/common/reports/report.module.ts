import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Report } from "./entities/report.entity";
import { ReportCategory } from "./entities/reportCategory.entity";
import { ReportService } from "./service/report.service";
import { ReportCategoryService } from "./service/reportCategory.service";
import { ReportController } from "./controllers/report.controller";
import { ReportCategoryController } from "./controllers/reportCategory.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Report, ReportCategory])],
    controllers: [ReportController, ReportCategoryController],
    providers: [ReportService, ReportCategoryService]
})
export class ReportModule{}