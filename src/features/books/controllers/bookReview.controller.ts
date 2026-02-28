import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { BookReviewService } from "../services/bookReview.service";
import { BookReviewListDto } from "../dtos/bookReview.list";
import { BookReviewCreateDto } from "../dtos/bookReview.create";

@Controller("bookReview")
export class BookReviewController {
    constructor(private readonly service: BookReviewService) {}


    @Get()
    @ApiOkResponse({type: BookReviewListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: BookReviewListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: BookReviewCreateDto})
    async create(@Body() payload: BookReviewCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}