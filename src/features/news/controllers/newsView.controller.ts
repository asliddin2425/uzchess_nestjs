import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { NewsService } from "../services/news.service";
import { NewsListDto } from "../dtos/news.list";
import { NewsCreateDto } from "../dtos/news.create";
import { NewsViewListDto } from "../dtos/newsView.list";
import { NewsViewCreateDto } from "../dtos/newsView.create";
import { NewsViewService } from "../services/newsView.service";

@Controller("newsView")
export class NewsViewController {
    constructor(private readonly service: NewsViewService) {}


    @Get()
    @ApiOkResponse({type: NewsViewListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: NewsViewListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: NewsViewCreateDto})
    async create(@Body() payload: NewsViewCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}