import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { News } from "./entities/news.entity";
import { NewsController } from "./controllers/news.controller";
import { NewsService } from "./services/news.service";
import { NewsView } from "./entities/newsView.entity";
import { NewsViewController } from "./controllers/newsView.controller";
import { NewsViewService } from "./services/newsView.service";

@Module({
    imports: [TypeOrmModule.forFeature([News, NewsView])],
    controllers: [NewsController, NewsViewController],
    providers: [NewsService, NewsViewService] 
})
export class NewsModule{}