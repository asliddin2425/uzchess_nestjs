import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Course } from "./course.entity";
import { CourseSection } from "./courseSection.entity";

@Entity("courseLessons")
export class CourseLessons extends BaseModel {
    @Column()
    courseId: number;

    @Column()
    courseSectionId: number;

    @Column({length: 128})
    title: string;

    @Column({type: "text", nullable: true})
    content: string;

    @Column({length: 128, nullable: true})
    thumbnail: string;

    @Column({length: 256})
    video: string;

    @Column({nullable: true})
    order:number;

    @Column({type: "timestamp"})
    date: Date;;

    @Column({type: "boolean", default: false})
    isFree: boolean;

    @ManyToOne(() => Course, c => c.courseLessons, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    course: Course;

    @ManyToOne(() => CourseSection, cs => cs.courseLessons, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseSectionId"})
    courseSection: CourseSection;

}