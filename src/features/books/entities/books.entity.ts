import { Author } from "src/common/authors/author.entity";
import { Difficulties } from "src/common/difficulties/difficulties.entity";
import { Languages } from "src/common/language/language.entity";
import { BaseModel } from "src/core/base-model";
import {  Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BookCategory } from "./bookCategory.entity";
import { BookReview } from "./bookReview.entity";
import { BookLikes } from "./bookLikes.entity";
import { Report } from "src/common/reports/entities/report.entity";

@Entity("books")
export class Books extends BaseModel {

    @Column({type: "int"})
    authorId: number;

    @Column({type: "int"})
    categoryId: number

    @Column({type: "int"})
    languageId: number;

    @Column({type: "int"})
    difficultyId: number;
    
    @Column({length: 128})
    title: string

    @Column({type: "text"})
    description: string;

    @Column({length: 128, nullable: true})
    image: string

    @Column({type: "decimal",  precision: 10, scale: 2 })
    price: number

    @Column({type: "decimal",precision: 10, scale: 2, nullable: true})
    newPrice: number;

    @Column({type: "decimal", precision: 2, scale: 1 })
    rating: number

    @Column({default: 0})
    reviewsCount: number;

    @Column()
    pages: number

    @Column()
    pubDate: Date;


    @ManyToOne(() => Author, a => a.books, {onDelete: "CASCADE"})
    @JoinColumn({name: "authorId"})
    author: Author; 

    @ManyToOne(() => Languages, l => l.books, {onDelete: "CASCADE"})
    @JoinColumn({name: "languagesId"})
    languages: Languages;

    @ManyToOne(() => BookCategory, bk => bk.books, {onDelete: "CASCADE"})
    @JoinColumn({name: "bookCategoryId"})
    bookCategory: BookCategory;

    @ManyToOne(() => Difficulties, d => d.books, {onDelete: "CASCADE"})
    @JoinColumn({name: "difficultiesId"})
    difficulties: Difficulties;

    @OneToMany(() => BookReview, br => br.book)
    bookReview: BookReview[];

    @OneToMany(() => BookLikes, bl => bl.book)
    bookLikes: BookLikes[];

    @OneToMany(() => Report, r => r.book)
    reports: Report[];
    
}