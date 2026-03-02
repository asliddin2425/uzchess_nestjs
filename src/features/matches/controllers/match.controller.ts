import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MatchesService } from "../services/match.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { MatchListDto } from "../dtos/match.list";
import { MatchCreateDto } from "../dtos/match.create";

@Controller("match")
export class MatchController {
    constructor(
        private readonly service: MatchesService
    ) {}

    @Get()
    @ApiOkResponse({type: MatchListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: MatchListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: MatchCreateDto})
    async create(@Body() payload: MatchCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}