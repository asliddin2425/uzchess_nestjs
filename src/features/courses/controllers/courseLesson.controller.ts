import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseLessonsService } from "../services/courseLesson.service";
import { CourseLessonListDto } from "../dtos/courseLesson.list";
import { CourseLessonCreateDto } from "../dtos/courseLesson.create";

@Controller("courseLesson")
export class CourseLessonController {
    constructor(private readonly service: CourseLessonsService) {}


    @Get()
    @ApiOkResponse({type: CourseLessonListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: CourseLessonListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: CourseLessonCreateDto})
    async create(@Body() payload: CourseLessonCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}