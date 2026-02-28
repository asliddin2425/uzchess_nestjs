import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { BookLikes } from "../entities/bookLikes.entity";
import { plainToInstance } from "class-transformer";
import { BookLikeListDto } from "../dtos/bookLikes.list";
import { InjectRepository } from "@nestjs/typeorm";
import { BookLikesCreateDto } from "../dtos/bookLikes.create";

@Injectable()
export class BookLikesService {
    constructor(
        @InjectRepository(BookLikes)
        private readonly repo: Repository<BookLikes>,
    ) {}

    async getAll() {
        const rawBookLikes = await this.repo.find()
        const bookLikes = plainToInstance(
            BookLikeListDto, 
            rawBookLikes,
            {
                excludeExtraneousValues: true
            },
        )
        return bookLikes;
    }


    async getOne(id: number) {
        const rawBookLikes = await this.repo.findOneBy({id})
        if(!rawBookLikes) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            BookLikeListDto,
            rawBookLikes,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: BookLikesCreateDto) {
        const newBookLikes = this.repo.create(payload as BookLikes)
        await this.repo.save(newBookLikes)
        return plainToInstance(BookLikeListDto, newBookLikes), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const bookLikes = await this.repo.findOneBy({id})
        if(!bookLikes) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(bookLikes)
    }



}