import {  Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookReview } from "../entities/bookReview.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { BookReviewListDto } from "../dtos/bookReview.list";
import { BookReviewCreateDto } from "../dtos/bookReview.create";

@Injectable()
export class BookReviewService {
    constructor(
        @InjectRepository(BookReview)
        private readonly repo: Repository<BookReview>,
    ) {}


    async getAll() {
        const rawBookReview = await this.repo.find()
        const bookReview = plainToInstance(
            BookReviewListDto,
            rawBookReview,
            {
                excludeExtraneousValues: true,
            },
        )
        return bookReview;
    }


    async getOne(id: number) {
        const rawBookReview = await this.repo.findOneBy({id})
        if(!rawBookReview) {
            throw new NotFoundException("Not found")
        }
        return plainToInstance(
            BookReviewListDto,
            rawBookReview,
            {excludeExtraneousValues: true}
        )
    }


    async create(payload: BookReviewCreateDto) {
        const newBookReview = this.repo.create(payload as BookReview)
        await this.repo.save(newBookReview)
        return plainToInstance(BookReviewListDto, newBookReview), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const bookReview = await this.repo.findOneBy({id})
        if(!bookReview) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(bookReview)
    }
}