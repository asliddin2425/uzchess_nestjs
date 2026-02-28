import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Books } from "../entities/books.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { BooksListDto } from "../dtos/books.list";
import { BooksCreateDto } from "../dtos/books.create";

@Injectable()
export class BooksService {
    constructor (
        @InjectRepository(Books)
        private readonly repo: Repository<Books>,
    ) {}

    
    async getAll() {
        const rawBooks = await this.repo.find();
        const books = plainToInstance(
            BooksListDto, 
            rawBooks,
            {
                excludeExtraneousValues: true
            },
        )
        return books;
    }

    async getOne(id: number) {
        const rawBooks = await this.repo.findOneBy({id})
        if(!rawBooks) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            BooksListDto, 
            rawBooks,
            {
                excludeExtraneousValues: true
            }
        )
    }


    async create(payload: BooksCreateDto) {
        const newBooks = this.repo.create(payload as unknown as Books)
        await this.repo.save(newBooks)
        return plainToInstance(BooksListDto, newBooks), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const books = await this.repo.findOneBy({id})
        if(!books) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(books)
    }

}