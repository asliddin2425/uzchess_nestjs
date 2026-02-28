import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MatchesService } from "../matches.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { MatchesListDto } from "../dtos/matches.list";
import { MatchesCreateDto } from "../dtos/matches.create";

@Controller("matches")
export class MatchesController {
    constructor(
        private readonly service: MatchesService
    ) {}

    @Get()
    @ApiOkResponse({type: MatchesListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: MatchesListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: MatchesCreateDto})
    async create(@Body() payload: MatchesCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}