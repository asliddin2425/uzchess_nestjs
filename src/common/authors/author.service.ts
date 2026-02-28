import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./author.entity";
import { Auth, Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { AuthorListDto } from "./dtos/author.list";
import { AuthorCreateDto } from "./dtos/author.create";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly repo: Repository<Author>,
    ) {}


    async getAll() {
        const rawAuthor = await this.repo.find();
        const author = plainToInstance(
            AuthorListDto,
            rawAuthor,
            {
                excludeExtraneousValues: true
            },
        )
        return author;
    }

    async getOne(id: number) {
        const rawAuthor = await  this.repo.findOneBy({id})
        if(!rawAuthor) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            AuthorListDto,
            rawAuthor,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: AuthorCreateDto) {
        const newAuthor = this.repo.create(payload as unknown as Author)
        await this.repo.save(newAuthor)
        return plainToInstance(AuthorListDto, newAuthor), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const author = await this.repo.findOneBy({id})
        if(!author) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(author)
    }
}