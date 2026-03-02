import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Course } from "./course.entity";
import { User } from "src/auth/entities/user.entity";
import type { Relation } from "typeorm";
@Entity("courseLikes")
export class CourseLikes extends BaseModel {
    @Column()
    userId: number;

    @Column()
    courseId: number;

    @Column({type: "timestamp"})
    date: Date;

    @ManyToOne(() => Course, c => c.courseLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    courses: Relation<Course[]>;

    @ManyToOne(() => User, u => u.courseLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User[]>;

}