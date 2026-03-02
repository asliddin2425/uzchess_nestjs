import { BaseModel } from "src/core/base-model";
import { Books } from "src/features/books/entities/books.entity";
import { Course } from "src/features/courses/entities/course.entity";
import { Column, Entity, OneToMany } from "typeorm";
import type { Relation } from "typeorm";
@Entity("difficulties")
export class Difficulties extends BaseModel {
    @Column({length: 32})
    title: string;

    @Column({length: 128})
    icon: string; 

    @OneToMany(() => Books, b => b.difficulties)
    books: Relation<Books[]>;

    @OneToMany(() => Course, c => c.difficulties)
    courses: Relation<Course[]>;
}