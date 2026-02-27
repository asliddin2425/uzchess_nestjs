import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Books } from "./books.entity";
import { User } from "src/auth/user/entities/user.entity";
@Entity("bookReview")
export class BookReview extends BaseModel {

    @Column()
    userId: number;

    @Column()
    bookId: number;

    @Column()
    rating: number;

    @Column({length: 512, nullable: true})
    comment: string

    @Column({type: "timestamp"})
    date: Date;


    @ManyToOne(() => Books, book => book.bookReview, {onDelete: "CASCADE"})
    @JoinColumn({name: "bookId"})
    book: Books;

    @ManyToOne(() => User, user => user.bookReview, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: User;
}