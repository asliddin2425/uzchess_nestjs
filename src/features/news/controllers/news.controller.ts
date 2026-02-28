import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { NewsService } from "../services/news.service";
import { NewsListDto } from "../dtos/news.list";
import { NewsCreateDto } from "../dtos/news.create";

@Controller("news")
export class NewsController {
    constructor(private readonly service: NewsService) {}


    @Get()
    @ApiOkResponse({type: NewsListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: NewsListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: NewsCreateDto})
    async create(@Body() payload: NewsCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}