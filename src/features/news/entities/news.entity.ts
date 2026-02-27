import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany } from "typeorm";
import { NewsView } from "./newsView.entity";
@Entity("news")
export class News extends BaseModel {
   
    @Column({length: 256})
    title: string;

    @Column({length: 128})
    image: string;

    @Column({type: "text"})
    content: string;

    @Column({type: "timestamp"})
    date: Date;

    @OneToMany(() => NewsView, nv => nv.news)
    newsView: NewsView[];
}