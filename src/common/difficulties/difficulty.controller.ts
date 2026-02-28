import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { DifficultyService } from "./difficulties.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { DifficultyListDto } from "./dtos/difficulty.list";
import { DifficultyCreateDto } from "./dtos/difficulty.create";

@Controller("difficulty")
export class DifficultyController {
    constructor(
        private readonly service: DifficultyService
    ) {}



    @Get()
    @ApiOkResponse({type: DifficultyListDto, isArray: true})
    async getAll() {
        return await this.service.getAll();
    }

   @Get(":id")
    @ApiOkResponse({type: DifficultyListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: DifficultyCreateDto})
    async create(@Body() payload: DifficultyCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}