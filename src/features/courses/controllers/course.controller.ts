import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseService } from "../services/course.service";
import { CourseListDto } from "../dtos/course.list";
import { CourseCreateDto } from "../dtos/course.create";

@Controller("course")
export class CourseController {
    constructor(private readonly service: CourseService) {}


    @Get()
    @ApiOkResponse({type: CourseListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: CourseListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: CourseCreateDto})
    async create(@Body() payload: CourseCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}