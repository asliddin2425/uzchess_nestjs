import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { News } from "../entities/news.entity";
import { plainToInstance } from "class-transformer";
import { NewsListDto } from "../dtos/news.list";
import { NewsCreateDto } from "../dtos/news.create";
import { InjectRepository } from "@nestjs/typeorm";
import { NewsView } from "../entities/newsView.entity";
import { NewsViewListDto } from "../dtos/newsView.list";
import { NewsViewCreateDto } from "../dtos/newsView.create";

@Injectable()
export class NewsViewService {
    constructor (
        @InjectRepository(NewsView)
        private readonly repo: Repository<NewsView>,
    ) {}


    async getAll() {
        const rawNewsView = await this.repo.find()
        const newsView = plainToInstance(
            NewsViewListDto, 
            rawNewsView,
            {
                excludeExtraneousValues: true
            },
        )
        return newsView;
    }

    async getOne(id: number) {
        const rawNewsView = await this.repo.findOneBy({id})
        if(!rawNewsView) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            NewsViewListDto, 
            rawNewsView,
            {
                excludeExtraneousValues: true
            }
        )
    }


    async create(payload: NewsViewCreateDto) {
        const newNewsView = this.repo.create(payload  as NewsView)
        await this.repo.save(newNewsView)
        return plainToInstance(NewsViewListDto, newNewsView), {
            excludeExtraneousValues: true,
        }
    }



    async delete(id: number) {
        const newsView = await this.repo.findOneBy({id})
        if(!newsView) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(newsView)
    }

}