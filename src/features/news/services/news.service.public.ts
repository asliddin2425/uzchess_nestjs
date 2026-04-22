import { Injectable } from '@nestjs/common';
import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import { plainToInstance } from 'class-transformer';
import { News } from '../entities/news.entity';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.dto.public';

@Injectable()
export class NewsPublicService {
  async findAll(): Promise<NewsDetailPublicDto[]> {
    const news = await News.find();
    const data = plainToInstance(NewsDetailPublicDto, news, {
      excludeExtraneousValues: true,
    });
    return data;
  }

  async findOne(id: number): Promise<NewsListPublicDto> {
    const news = await News.findOneBy({ id });
    const data = plainToInstance(NewsListPublicDto, news, {
      excludeExtraneousValues: true,
    });
    return data;
  }
}
