import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { NewsView } from './entities/newsView.entity';
import { NewsControllerPublic } from './controllers/news.controller.public';
import { NewsPublicService } from './services/news.service.public';
import { NewsControllerAdmin } from './controllers/news.controller.admin';
import { NewsServiceAdmin } from './services/news.service.admin';

@Module({
  imports: [TypeOrmModule.forFeature([News, NewsView])],
  controllers: [NewsControllerPublic, NewsControllerAdmin],
  providers: [NewsPublicService, NewsServiceAdmin],
})
export class NewsModule {}
