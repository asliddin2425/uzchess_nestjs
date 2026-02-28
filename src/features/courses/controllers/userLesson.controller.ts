import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { UserLessonsListDto } from "../dtos/userLessons.list";
import { UserLessonsCreateDto } from "../dtos/userLessons.create";
import { UserLessonsService } from "../services/userLessons.service";

@Controller("userLesson")
export class UserLessonController {
    constructor(private readonly service: UserLessonsService) {}


    @Get()
    @ApiOkResponse({type: UserLessonsListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: UserLessonsListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: UserLessonsCreateDto})
    async create(@Body() payload: UserLessonsCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}