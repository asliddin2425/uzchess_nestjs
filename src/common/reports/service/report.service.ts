import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Report } from "../entities/report.entity";
import { plainToInstance } from "class-transformer";
import { ReportListDto } from "../dtos/report.list";
import { ReportCreateDto } from "../dtos/report.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Report)
        private readonly repo: Repository<Report>,
    ){}


    async getAll() {
        const rawReport = await this.repo.find()
        const report  = plainToInstance(
            ReportListDto,
            rawReport,
            {
                excludeExtraneousValues: true
            },
        )
        return report;
    }

    async getOne(id: number) {
        const rawReport = await this.repo.findOneBy({id})
        if(!rawReport) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            ReportListDto, 
            rawReport,
            {excludeExtraneousValues: true}
        )
    }


    async create(payload: ReportCreateDto) {
        const newReport = this.repo.create(payload as Report)
        await this.repo.save(newReport)
        return plainToInstance(ReportListDto, newReport), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const report = await this.repo.findOneBy({id})
        if(!report) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(report)
    }
}