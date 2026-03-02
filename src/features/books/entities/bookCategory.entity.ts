import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany } from "typeorm";
import { Books } from "./books.entity";
import type { Relation } from "typeorm";
@Entity("bookCategory")
export class BookCategory extends BaseModel {
    
    @Column({length: 64})
    title: string;

    @OneToMany(() => Books, b => b.bookCategory)
    books: Relation<Books[]>;

}