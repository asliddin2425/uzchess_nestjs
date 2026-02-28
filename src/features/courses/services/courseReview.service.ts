import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { CourseReview } from "../entities/courseReview.entity";
import { CourseReviewListDto } from "../dtos/courseReview.list";
import { CourseReviewCreateDto } from "../dtos/courseReview.create";

@Injectable()
export class CourseReviewService {
    constructor(
        @InjectRepository(CourseReview)
        private readonly repo: Repository<CourseReview>,
    ) {}


    async getAll() {
        const rawCourseReview = await this.repo.find()
        const courseReview = plainToInstance(
            CourseReviewListDto, 
            rawCourseReview,
            {
                excludeExtraneousValues: true
            },
        )
        return courseReview;
    }

    async getOne(id: number) {
        const rawCourseReview = await this.repo.findOneBy({id})
        if(!rawCourseReview) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CourseReviewListDto, 
            rawCourseReview,
            {
                excludeExtraneousValues: true
            }
        )
    }

    async create(payload: CourseReviewCreateDto) {
        const newCourseReview = this.repo.create(payload as unknown as CourseReview)
        await this.repo.save(newCourseReview)
        return plainToInstance(CourseReviewListDto, newCourseReview),{
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const courseReview = await this.repo.findOneBy({id})
        if(!courseReview) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(courseReview)
    }


    
}