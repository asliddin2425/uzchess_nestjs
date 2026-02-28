import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseService } from "../services/course.service";
import { CourseListDto } from "../dtos/course.list";
import { CourseCreateDto } from "../dtos/course.create";
import { PurchasedCourseService } from "../services/purchasedCourses.service";
import { PurchasedCourseListDto } from "../dtos/purchasedCourse.list";
import { PurchasedCourseCreateDto } from "../dtos/purchasedCourse.create";

@Controller("purchasedCourse")
export class PurchasedCourseController {
    constructor(private readonly service: PurchasedCourseService
    ) {}


    @Get()
    @ApiOkResponse({type: PurchasedCourseListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: PurchasedCourseListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: PurchasedCourseCreateDto})
    async create(@Body() payload: PurchasedCourseCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}