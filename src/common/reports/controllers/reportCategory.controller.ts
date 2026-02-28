import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { ReportCategoryService } from "../service/reportCategory.service";
import { ReportCategoryListDto } from "../dtos/reportCategory.list";
import { ReportCategoryCreateDto } from "../dtos/reportCategory.create";

@Controller("reportCategory")
export class ReportCategoryController {
    constructor (
        private readonly service: ReportCategoryService
    ) {}


    @Get()
    @ApiOkResponse({type: ReportCategoryListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: ReportCategoryListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: ReportCategoryCreateDto})
    async create(@Body() payload: ReportCategoryCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }

}