import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { UserLessons } from "../entities/userLessons.entity";
import { UserLessonsListDto } from "../dtos/userLessons.list";
import { UserLessonsCreateDto } from "../dtos/userLessons.create";

@Injectable()
export class UserLessonsService {
    constructor(
        @InjectRepository(UserLessons)
        private readonly repo: Repository<UserLessons>,
    ) {}


    async getAll() {
        const rawUserLessons = await this.repo.find()
        const userLessons = plainToInstance(
            UserLessonsListDto, 
            rawUserLessons,
            {
                excludeExtraneousValues: true
            },
        )
        return userLessons;
    }

    async getOne(id: number) {
        const rawUserLessons = await this.repo.findOneBy({id})
        if(!rawUserLessons) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            UserLessonsListDto, 
            rawUserLessons,
            {
                excludeExtraneousValues: true
            }
        )
    }

    async create(payload: UserLessonsCreateDto) {
        const newUserLessons = this.repo.create(payload as UserLessons)
        await this.repo.save(newUserLessons)
        return plainToInstance(UserLessonsListDto, newUserLessons), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const userLessons = await this.repo.findOneBy({id})
        if(!userLessons) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(userLessons)
    }


    
}