import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PlayerService } from "./players.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { PlayersListDto } from "./dtos/players.list";
import { Players } from "./players.entity";
import { PlayersCreateDto } from "./dtos/players.create";

@Controller("players")
export class PlayerController {
    constructor(
        private readonly service: PlayerService
    ) {}


    @Get()
    @ApiOkResponse({type: PlayersListDto, isArray: true})
    async getall() {
        return await this.service.getAll()
    }

   @Get(":id")
    @ApiOkResponse({type: PlayersListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: PlayersCreateDto})
    async create(@Body() payload: PlayersCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }

}