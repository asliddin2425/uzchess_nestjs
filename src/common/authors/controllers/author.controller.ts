import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AuthorService } from "../author.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { AuthorListDto } from "../dtos/author.list";
import { AuthorCreateDto } from "../dtos/author.create";

@Controller("authors")
export class AuthorController{
    constructor(
        private readonly service: AuthorService
    ) {}


    @Get()
    @ApiOkResponse({type: AuthorListDto, isArray: true})
    async getAll() {
        return await this.service.getAll();
    }

   @Get(":id")
    @ApiOkResponse({type: AuthorListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: AuthorCreateDto})
    async create(@Body() payload: AuthorCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }



}