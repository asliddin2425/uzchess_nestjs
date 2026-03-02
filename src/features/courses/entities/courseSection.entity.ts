import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Course } from "./course.entity";
import { CourseLessons } from "./courseLesson.entity";
import type { Relation } from "typeorm";
@Entity("courseSection")
export class CourseSection extends BaseModel {
    @Column()
    courseId: number;

    @Column({length: 256})
    title: string

    @Column({nullable: true})
    order: number

    @Column({type: "timestamp"})
    date: Date;

    @ManyToOne(() => Course, c => c.courseSection, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    courses: Relation<Course[]>;

    @OneToMany(() => CourseLessons, cl => cl.courseSection)
    courseLessons: Relation<CourseLessons[]>;


}