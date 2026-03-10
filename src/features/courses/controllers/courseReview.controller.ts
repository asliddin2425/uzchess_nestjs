import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CourseReviewService } from "../services/courseReview.service";
import { CourseReviewListDto } from "../dtos/courseReview.list";
import { CourseReviewCreateDto } from "../dtos/courseReview.create";
import { AuthGuard } from "src/core/guards/auth.guard";

@Controller("courseReview")
@UseGuards(AuthGuard)
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