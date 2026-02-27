import { Expose } from "class-transformer";

export class NewsListDto {
    @Expose()
    title: string;

    @Expose()
    image: string;

    @Expose()
    content: string

    @Expose()
    date: Date;
}