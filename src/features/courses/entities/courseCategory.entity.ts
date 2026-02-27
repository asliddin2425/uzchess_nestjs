import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany } from "typeorm";
import { Course } from "./course.entity";

@Entity("courseCategory")
export class CourseCategory extends BaseModel {
    @Column({length: 64})
    title: string;

    @OneToMany(() => Course, c => c.categoryId)
    courses: Course[];

}