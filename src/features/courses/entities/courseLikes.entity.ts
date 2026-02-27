import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Course } from "./course.entity";
import { User } from "src/auth/user/entities/user.entity";
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
    courses: Course;

    @ManyToOne(() => User, u => u.courseLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: User;

}