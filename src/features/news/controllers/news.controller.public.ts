import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import getFullPath from 'src/core/utils/getFull-path';
import type { Request } from 'express';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.dto.public';
import { NewsPublicService } from '../services/news.service.public';

@ApiTags('News - Public')
@Controller('public/news')
export class NewsControllerPublic {
  constructor(private readonly service: NewsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => NewsDetailPublicDto, isArray: true })
  async findAll(@Req() req: Request): Promise<NewsDetailPublicDto[]> {
    const news = await this.service.findAll();
    news.forEach((item) => (item.image = getFullPath(req, item.image)));
    return news;
  }

  @Get(':id')
  @ApiOkResponse({ type: () => NewsListPublicDto, isArray: true })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<NewsListPublicDto> {
    return await this.service.findOne(id);
  }
}
