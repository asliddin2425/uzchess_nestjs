import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ReportCategory } from "../entities/reportCategory.entity";
import { plainToInstance } from "class-transformer";
import { ReportCategoryListDto } from "../dtos/reportCategory.list";
import { ReportCategoryCreateDto } from "../dtos/reportCategory.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ReportCategoryService {
    constructor(
        @InjectRepository(ReportCategory)
        private readonly repo: Repository<ReportCategory>,
    ) {}

    async getAll() {
        const rawReportCategory = await this.repo.find()
        const reportCategory = plainToInstance(
            ReportCategoryListDto, 
            rawReportCategory,
            {
                excludeExtraneousValues: true
            },
        )
        return reportCategory;
    }


    async getOne(id: number) {
        const rawReportCategory = await this.repo.findOneBy({id})
        if(!rawReportCategory) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            ReportCategoryListDto, 
            rawReportCategory,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: ReportCategoryCreateDto) {
        const newReportCategory = this.repo.create(payload as ReportCategory)
        await this.repo.save(newReportCategory)
        return plainToInstance(ReportCategoryListDto, newReportCategory), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const reportCategory = await this.repo.findOneBy({id})
        if(!reportCategory) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(reportCategory)
    }

}