import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { News } from "../entities/news.entity";
import { plainToInstance } from "class-transformer";
import { NewsListDto } from "../dtos/news.list";
import { NewsCreateDto } from "../dtos/news.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class NewsService {
    constructor (
        @InjectRepository(News)
        private readonly repo: Repository<News>,
    ) {}


    async getAll() {
        const rawNews = await this.repo.find()
        const news = plainToInstance(
            NewsListDto, 
            rawNews,
            {
                excludeExtraneousValues: true
            },
        )
        return news;
    }

    async getOne(id: number) {
        const rawNews = await this.repo.findOneBy({id})
        if(!rawNews) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            NewsListDto, 
            rawNews,
            {
                excludeExtraneousValues: true
            }
        )
    }


    async create(payload: NewsCreateDto) {
        const newNews = this.repo.create(payload  as News)
        await this.repo.save(newNews)
        return plainToInstance(NewsListDto, newNews), {
            excludeExtraneousValues: true,
        }
    }



    async delete(id: number) {
        const news = await this.repo.findOneBy({id})
        if(!news) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(news)
    }

}