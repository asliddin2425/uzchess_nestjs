import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ReportService } from "../service/report.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { ReportListDto } from "../dtos/report.list";
import { ReportCreateDto } from "../dtos/report.create";

@Controller("report")
export class ReportController {
    constructor (
        private readonly service: ReportService
    ) {}


    @Get()
    @ApiOkResponse({type: ReportListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: ReportListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: ReportCreateDto})
    async create(@Body() payload: ReportCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }

}