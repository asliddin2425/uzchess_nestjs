import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ReportType } from "../../enums/enums";
import { ReportCategory } from "./reportCategory.entity";
import { Books } from "src/features/books/entities/books.entity";
import { Course } from "src/features/courses/entities/course.entity";
@Entity("reports")
export class Report extends BaseModel {
   
    @Column()
    reportCategoryId: number;
   
    @Column({type: "enum", enum: ReportType})
    target: ReportType;

    @Column()
    targetId: number;

    @Column({length: 256, nullable: true})
    description: string;

    @Column({type: "timestamp"})
    date: Date;

    @ManyToOne(() => ReportCategory, rc => rc.reports, {onDelete: "CASCADE"})
    @JoinColumn({name: "reportCategoryId"})
    reportCategory: ReportCategory;

    @ManyToOne(() => Books, book => book.reports, {onDelete: "CASCADE", nullable: true, createForeignKeyConstraints: false})
    @JoinColumn({name: "targetId"})
    book: Books;

    @ManyToOne(() => Course, c => c.reports, {onDelete: "CASCADE", createForeignKeyConstraints: false}) 
    @JoinColumn({name: "targetId"})
    course: Course;
}