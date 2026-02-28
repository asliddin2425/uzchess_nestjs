import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "../entities/course.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { CourseListDto } from "../dtos/course.list";
import { CourseCreateDto } from "../dtos/course.create";

@Injectable()
export class CourseService {
    constructor (
        @InjectRepository(Course)
        private readonly repo: Repository<Course>,
    ) {}

    async getAll() {
        const rawCourse = await this.repo.find();
        const course = plainToInstance(
            CourseListDto, 
            rawCourse,
            {
                excludeExtraneousValues: true
            },
        )
        return course;
    }


    async getOne(id: number) {
        const rawCourse = await this.repo.findOneBy({id})
        if(!rawCourse) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CourseListDto, 
            rawCourse,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: CourseCreateDto) {
        const newCourse = this.repo.create(payload as Course)
        await this.repo.save(newCourse)
        return plainToInstance(CourseListDto, newCourse),{
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const course = await this.repo.findOneBy({id})
        if(!course) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(course)
    }

}