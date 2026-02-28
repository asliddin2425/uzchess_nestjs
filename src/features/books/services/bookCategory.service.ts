import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { BookCategory } from "../entities/bookCategory.entity";
import { plainToInstance } from "class-transformer";
import { BookCategoryListDto } from "../dtos/bookCategory.list";
import { InjectRepository } from "@nestjs/typeorm";
import { BookCategoryCreateDto } from "../dtos/bookCategory.update";

@Injectable()
export class BookCategoryService{
    constructor(
        @InjectRepository(BookCategory)
        private readonly repo: Repository<BookCategory>,
    ) {}


    async getAll() {
        const rawBookCategory = await this.repo.find();
        const bookCategory = plainToInstance(
            BookCategoryListDto, 
            rawBookCategory,
            {
                excludeExtraneousValues: true
            },
        )  
        return bookCategory; 
    }

    async getOne(id: number) {
        const rawBookCategory = await this.repo.findOneBy({id})
        if(!rawBookCategory) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            BookCategoryListDto,
            rawBookCategory,
            {
                excludeExtraneousValues: true
            }
        )
    }


    async create(payload: BookCategoryCreateDto) {
        const newBookCategory = this.repo.create(payload as BookCategory)
        await this.repo.save(newBookCategory)
        return plainToInstance(BookCategoryListDto, newBookCategory), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const bookCategory = await this.repo.findOneBy({id})
        if(!bookCategory) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(bookCategory)
    }



    


}