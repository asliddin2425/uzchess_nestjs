import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

import { BookLikesService } from "../services/bookLikes.service";
import { BookLikeListDto } from "../dtos/bookLikes.list";
import { BookLikesCreateDto } from "../dtos/bookLikes.create";

@Controller("bookLikes")
export class BooksLikesController {
    constructor(
        private readonly service: BookLikesService
        ) {}


    @Get()
    @ApiOkResponse({type: BookLikeListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: BookLikeListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: BookLikesCreateDto})
    async create(@Body() payload: BookLikesCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}