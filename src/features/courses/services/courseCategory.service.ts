import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseCategory } from "../entities/courseCategory.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { CourseCategoryListDto } from "../dtos/courseCategory.list";
import { CourseCategoryCreateDto } from "../dtos/courseCategory.update";

@Injectable()
export class CourseCategoryService {
    constructor(
        @InjectRepository(CourseCategory)
        private readonly repo: Repository<CourseCategory>,
    ) {}


    async getAll() {
        const rawCourseCategory = await this.repo.find()
        const courseCategory = plainToInstance(
            CourseCategoryListDto, 
            rawCourseCategory,
            {
                excludeExtraneousValues: true
            },
        )
        return courseCategory;
    }


    async getOne(id: number) {
        const rawCourseCategory = await this.repo.findOneBy({id})
        if(!rawCourseCategory) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CourseCategoryListDto,
            rawCourseCategory,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: CourseCategoryCreateDto) {
        const newCourseCategory = this.repo.create(payload as CourseCategory)
        await this.repo.save(newCourseCategory)
        return plainToInstance(CourseCategoryListDto, newCourseCategory),{
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const courseCategory = await this.repo.findOneBy({id})
        if(!courseCategory) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(courseCategory)
    }

}