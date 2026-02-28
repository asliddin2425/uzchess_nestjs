import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

import { TermsService } from "./terms.service";
import { TermsListDto } from "./dtos/terms.list";
import { TermsCreateDto } from "./dtos/terms.create";

@Controller("terms")
export class TermsController {
    constructor (
        private readonly service: TermsService
    ) {}


    @Get()
    @ApiOkResponse({type: TermsListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: TermsListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: TermsCreateDto})
    async create(@Body() payload: TermsCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }

}