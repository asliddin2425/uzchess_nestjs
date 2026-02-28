import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { CourseLessonListDto } from "../dtos/courseLesson.list";
import { CourseLessons } from "../entities/courseLesson.entity";
import { CourseLessonCreateDto } from "../dtos/courseLesson.create";

@Injectable()
export class CourseLessonsService {
    constructor(
        @InjectRepository(CourseLessons)
        private readonly repo: Repository<CourseLessons>,
    ) {}


    async getAll() {
        const rawCourseLessons = await this.repo.find()
        const courseLessons = plainToInstance(
            CourseLessonListDto, 
            rawCourseLessons,
            {
                excludeExtraneousValues: true
            },
        )
        return courseLessons;
    }


    async getOne(id: number) {
        const rawCourseLessons = await this.repo.findOneBy({id})
        if(!rawCourseLessons) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CourseLessonListDto, 
            rawCourseLessons,
            {
                excludeExtraneousValues: true
            }
        )
    }


    async create(payload: CourseLessonCreateDto) {
        const newCourseLessons= this.repo.create(payload as CourseLessons)
        await this.repo.save(newCourseLessons)
        return plainToInstance(CourseLessonListDto, newCourseLessons),{
            excludeExtraneousValues: true,
        }
    }


    async delete(id: number) {
        const courseLesson = await this.repo.findOneBy({id})
        if(!courseLesson) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(courseLesson)
    }

}