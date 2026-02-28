import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseLikesService } from "../services/courseLikes.service";
import { CourseLikesListDto } from "../dtos/courseLikes.list";
import { CourseLikeCreateDto } from "../dtos/courseLikes.create";

@Controller("courseLikes")
export class CourseLikesController {
    constructor(private readonly service: CourseLikesService) {}


    @Get()
    @ApiOkResponse({type: CourseLikesListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: CourseLikesListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.geTOne(id)
    }

    @Post()
    @ApiOkResponse({type: CourseLikeCreateDto})
    async create(@Body() payload: CourseLikeCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}