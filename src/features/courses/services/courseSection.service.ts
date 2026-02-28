import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { CourseSection } from "../entities/courseSection.entity";
import { CourseSectionListDto } from "../dtos/courseSection.list";
import { CourseSectionCreateDto } from "../dtos/courseSection.create";

@Injectable()
export class CourseSectionService {
    constructor(
        @InjectRepository(CourseSection)
        private readonly repo: Repository<CourseSection>,
    ) {}


    async getAll() {
        const rawCourseSection = await this.repo.find()
        const courseSection = plainToInstance(
            CourseSectionListDto, 
            rawCourseSection,
            {
                excludeExtraneousValues: true
            },
        )
        return courseSection;
    }


    async getOne(id: number) {
        const rawCourseSection = await this.repo.findOneBy({id})
        if(!rawCourseSection) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CourseSectionListDto,
            rawCourseSection,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: CourseSectionCreateDto) {
        const newCourseSection = this.repo.create(payload as CourseSection)
        await this.repo.save(newCourseSection)
        return plainToInstance(CourseSectionListDto, newCourseSection),{
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const courseSection = await this.repo.findOneBy({id})
        if(!courseSection) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(courseSection)
    }

    
}