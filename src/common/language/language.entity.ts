import { BaseModel } from "src/core/base-model";
import { Books } from "src/features/books/entities/books.entity";
import { Course } from "src/features/courses/entities/course.entity";
import { Column, Entity, OneToMany } from "typeorm";
import type { Relation } from "typeorm";
@Entity("languages")
export class Languages extends BaseModel {
    @Column({length: 32})
    title: string;

    @Column({length: 2})
    code: string;

    @OneToMany(() => Books, b => b.languages)
    books: Relation<Books[]>;

    @OneToMany(() => Course, c => c.languages)
    courses: Relation<Course[]>;
}