import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseCategoryService } from "../services/courseCategory.service";
import { CourseCategoryListDto } from "../dtos/courseCategory.list";
import { CourseCategoryCreateDto } from "../dtos/courseCategory.update";

@Controller("courseCategory")
export class CourseCategoryController {
    constructor(private readonly service: CourseCategoryService) {}


    @Get()
    @ApiOkResponse({type: CourseCategoryListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: CourseCategoryListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: CourseCategoryCreateDto})
    async create(@Body() payload: CourseCategoryCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}