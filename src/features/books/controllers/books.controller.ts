import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { BooksService } from "../services/book.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { BooksListDto } from "../dtos/books.list";
import { BooksCreateDto } from "../dtos/books.create";

@Controller("books")
export class BooksController {
    constructor(private readonly service: BooksService) {}


    @Get()
    @ApiOkResponse({type: BooksListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: BooksListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: BooksCreateDto})
    async create(@Body() payload: BooksCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}