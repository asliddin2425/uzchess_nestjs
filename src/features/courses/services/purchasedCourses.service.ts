import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { PurchasedCourses } from "../entities/purchasedCourses.entity";
import { PurchasedCourseListDto } from "../dtos/purchasedCourse.list";
import { PurchasedCourseCreateDto } from "../dtos/purchasedCourse.create";

@Injectable()
export class PurchasedCourseService {
    constructor(
        @InjectRepository(PurchasedCourses)
        private readonly repo: Repository<PurchasedCourses>,
    ) {}


    async getAll() {
        const rawPurchasedCourse = await this.repo.find()
        const purchasedCourse = plainToInstance(
            PurchasedCourseListDto,
            rawPurchasedCourse,
            {
                excludeExtraneousValues: true
            },
        )
        return purchasedCourse;
    }

    async getOne(id: number) {
        const rawPurchasedCourse = await this.repo.findOneBy({id})
        if(!rawPurchasedCourse) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            PurchasedCourseListDto,
            rawPurchasedCourse,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: PurchasedCourseCreateDto) {
        const newPurchasedCourse = this.repo.create(payload as PurchasedCourses)
        await this.repo.save(newPurchasedCourse)
        return plainToInstance(PurchasedCourseListDto, newPurchasedCourse),{
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const purchasedCourse = await this.repo.findOneBy({id})
        if(!purchasedCourse) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(purchasedCourse)
    }
    
}