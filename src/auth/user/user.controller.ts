import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { UserLessonsListDto } from "src/features/courses/dtos/userLessons.list";
import { UserCreateDto } from "./dtos/user.create";
import { retry } from "rxjs";
import { UserListDto } from "./dtos/user.list";

@Controller("users")
export class UserController {
    constructor(
        private readonly service: UserService
    ) {}

    @Get()
    @ApiOkResponse({type: UserLessonsListDto, isArray: true})
    async getAll() {
        return await this.service.getAll();
    }

    @Get(":id") 
    @ApiOkResponse({type: UserListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: UserCreateDto})
    async create(@Body() payload: UserCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete (@Param("id") id: number) {
        return await this.service.delete(id)
    }
}