import { BaseModel } from "src/core/base-model";
import { Books } from "src/features/books/entities/books.entity";
import { Course } from "src/features/courses/entities/course.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("authors")
export class Author extends BaseModel {
    @Column({length: 64})
    fullname: string;

    @OneToMany(() => Books, b => b.author)
    books: Books[]

    @OneToMany(() => Course, c => c.author)
    courses: Course[]
}