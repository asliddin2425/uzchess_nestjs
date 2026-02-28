import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CountryService } from "../country.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { CountryListDto } from "../dtos/ountry.list";
import { CountryCreateDto } from "../dtos/country.create";

@Controller("country")
export class CountryController {
    constructor(
        private readonly service: CountryService
    ) {}

    @Get()
    @ApiOkResponse({type: CountryListDto, isArray: true})
    async getAll() {
        return await this.service.getall();
    }

   @Get(":id")
    @ApiOkResponse({type: CountryListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: CountryCreateDto})
    async create(@Body() payload: CountryCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}