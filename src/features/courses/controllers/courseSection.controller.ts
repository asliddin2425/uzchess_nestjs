import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseService } from "../services/course.service";
import { CourseListDto } from "../dtos/course.list";
import { CourseCreateDto } from "../dtos/course.create";
import { CourseSectionService } from "../services/courseSection.service";
import { CourseSectionListDto } from "../dtos/courseSection.list";
import { CourseSectionCreateDto } from "../dtos/courseSection.create";

@Controller("courseSection")
export class CourseSectionController {
    constructor(private readonly service: CourseSectionService) {}


    @Get()
    @ApiOkResponse({type: CourseSectionListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: CourseSectionListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: CourseSectionCreateDto})
    async create(@Body() payload: CourseSectionCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}