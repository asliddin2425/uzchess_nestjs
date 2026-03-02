import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Books } from "./books.entity";
import { User } from "src/auth/entities/user.entity";
import type { Relation } from "typeorm";
@Entity("bookLikes")
export class BookLikes extends BaseModel {
   
    @Column()
    userId: number;
    
    @Column()
    bookId: number;

    @Column({type: "timestamp"})
    date: Date;

    @ManyToOne(() => Books, book => book.bookLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "bookId"})
    book: Relation<Books[]>;

    @ManyToOne(() => User, user => user.bookLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User[]>;
}