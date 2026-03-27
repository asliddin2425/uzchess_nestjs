import { Injectable, NotFoundException } from "@nestjs/common";
import { NewsCreateDtoAdmin } from "../dtos/admin/news.create.dto.admin";
import { News } from "../entities/news.entity";



@Injectable()
export class NewsServiceAdmin {
    async create(payload: NewsCreateDtoAdmin, image:Express.Multer.File): Promise<News> {
        const newNews = News.create({...payload, image: image.path});
        await News.save(newNews)
        return newNews;
    }

    async delete(id: number): Promise<undefined> {
        const news = await News.findOneBy({id});
        if(!news) {
            throw new NotFoundException("Not found")
        }
        await News.remove(news);
    }


}