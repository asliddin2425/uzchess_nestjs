import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { CourseLikes } from "../entities/courseLikes.entity";
import { CourseLikesListDto } from "../dtos/courseLikes.list";
import { CourseLikeCreateDto } from "../dtos/courseLikes.create";

@Injectable()
export class CourseLikesService {
    constructor(
        @InjectRepository(CourseLikes)
        private readonly repo: Repository<CourseLikes>,
    ) {}


    async getAll() {
        const rawCourseLikes = await this.repo.find()
        const courseLikes = plainToInstance(
            CourseLikesListDto, 
            rawCourseLikes,
            {
                excludeExtraneousValues: true
            },
        )
        return courseLikes;
    }



    async geTOne(id: number) {
        const rawCourseLikes = await this.repo.findOneBy({id})
        if(!rawCourseLikes) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CourseLikesListDto,
            rawCourseLikes,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: CourseLikeCreateDto) {
        const newCourseLikes = this.repo.create(payload as CourseLikes)
        await this.repo.save(newCourseLikes)
        return plainToInstance(CourseLikesListDto, newCourseLikes),{
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const courseLikes = await this.repo.findOneBy({id})
        if(!courseLikes) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(courseLikes)
    }
    
}