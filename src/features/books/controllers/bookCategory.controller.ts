import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { BooksService } from "../services/book.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { BooksListDto } from "../dtos/books.list";
import { BooksCreateDto } from "../dtos/books.create";
import { BookCategoryService } from "../services/bookCategory.service";
import { BookCategoryListDto } from "../dtos/bookCategory.list";
import { BookCategoryCreateDto } from "../dtos/bookCategory.update";

@Controller("bookCategory")
export class BookCatgoryController {
    constructor(private readonly service: BookCategoryService) {}


    @Get()
    @ApiOkResponse({type: BookCategoryListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: BookCategoryListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: BookCategoryCreateDto, isArray: true})
    async create(@Body() payload: BookCategoryCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}