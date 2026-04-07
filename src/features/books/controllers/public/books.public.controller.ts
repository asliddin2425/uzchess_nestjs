import { Controller, Get, Param, ParseIntPipe, Req } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BooksPublicService } from "../../services/public/book.public.service";
import { BooksDetailPublicDto } from "../../dtos/public/books.detail.public.dto";
import getFullPath from "src/core/utils/getFull-path";
import type { Request } from "express";
import { BooksListPublicDto } from "../../dtos/public/books.list.public.dto";

@ApiTags("Books - Public")
@Controller("public/books")
export class BooksControllerPublic {
    constructor(
        private readonly service: BooksPublicService
    ) {}


    @Get()
    @ApiOkResponse({type: () => BooksDetailPublicDto, isArray: true})
    // async findAll(@Req() req: Request): Promise<BooksDetailPublicDto[]> {
    async findAll(@Req() req: Request){

        const books = await this.service.findAll();
        books.forEach((item) => (item.image = getFullPath(req, item.image)));
        return books;
    }


    @Get(":id")
    @ApiOkResponse({type: () => BooksListPublicDto, isArray: true})
    async findOne(@Param("id", ParseIntPipe) id: number): Promise<BooksListPublicDto> {
        return await this.service.findOne(id)
    }
}