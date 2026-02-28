import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseService } from "../services/course.service";
import { CourseListDto } from "../dtos/course.list";
import { CourseCreateDto } from "../dtos/course.create";
import { CourseReviewService } from "../services/courseReview.service";
import { CourseReviewListDto } from "../dtos/courseReview.list";
import { CourseReviewCreateDto } from "../dtos/courseReview.create";

@Controller("courseReview")
export class CourseReviewController {
    constructor(private readonly service: CourseReviewService) {}


    @Get()
    @ApiOkResponse({type: CourseReviewListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: CourseReviewListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: CourseReviewCreateDto})
    async create(@Body() payload: CourseReviewCreateDto) {
        return await this.service.create(payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}