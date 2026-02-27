import { Expose, Type } from "class-transformer";
import { User } from "src/auth/user/entities/user.entity";
import { News } from "../entities/news.entity";

export class NewsViewListDto {
    @Expose()
    @Type(() => User)
    userId: number;

    @Expose()
    @Type(() => News)
    newsId: number;

    @Expose()
    firstDate: number;

    @Expose()
    lastDate: number;

    @Expose()
    count: number;
}