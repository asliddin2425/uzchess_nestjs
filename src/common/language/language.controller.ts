import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Languageservice } from "./language.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { LanguageListDto } from "./dtos/language.list";
import { LanguageCreateDto } from "./dtos/language.create";

@Controller("language")
export class LanguageController {
    constructor(
        private readonly service: Languageservice
    ) {}


    @Get()
    @ApiOkResponse({type: LanguageListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: LanguageListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: LanguageCreateDto})
    async create(@Body() payload: LanguageCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}