import { Author } from "src/common/authors/author.entity";
import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CourseCategory } from "./courseCategory.entity";
import { Languages } from "src/common/language/language.entity";
import { Difficulties } from "src/common/difficulties/difficulties.entity";
import { CourseReview } from "./courseReview.entity";
import { CourseSection } from "./courseSection.entity";
import { CourseLikes } from "./courseLikes.entity";
import { Report } from "src/common/reports/entities/report.entity";
import { PurchasedCourses } from "./purchasedCourses.entity";
import { CourseLessons } from "./courseLesson.entity";
@Entity("courses")
export class Course extends BaseModel {
    
    @Column()
    authorId: number;
    
    @Column()
    categoryId: number;

    @Column()
    languageId: number;
    
    @Column()
    difficultyId: number;

    @Column({length: 128})
    title: string;

    @Column({length: 128})
    image: string;

    @Column({type: "decimal", precision: 12, scale: 2})
    price: number;

    @Column({type: "decimal", precision: 12, scale: 2, nullable: true})
    newPrice: number;

    @Column({default: 0})
    reviewCounts: number;
    
    @Column({type: "decimal", precision: 2, scale: 1, nullable: true})
    rating: number;

    @Column({default: 0})
    sectionCount: number;

    @Column({default: 0})
    lessonCount: number;


    @ManyToOne(() => Author, a => a.courses, {onDelete: "CASCADE"})
    @JoinColumn({name: "authorId"})
    author: Author;  
    
    @ManyToOne(() => CourseCategory, cc => cc.courses, {onDelete: "CASCADE"})
    @JoinColumn({name: "categoryId"})
    courseCategory: CourseCategory;

    @ManyToOne(() => Languages, l => l.courses, {onDelete: "CASCADE"})
    @JoinColumn({name: "languageId"})
    languages: Languages;

    @ManyToOne(() => Difficulties, d => d.courses, {onDelete: "CASCADE"})
    @JoinColumn({name: "difficultyId"})
    difficulties: Difficulties;

    @OneToMany(() => CourseReview, cr => cr.courseId)
    courseReview: CourseReview[];

    @OneToMany(() => CourseSection, cs => cs.courseId)
    courseSection: CourseSection[];

    @OneToMany(() => CourseLikes, cl => cl.courseId)
    courseLikes: CourseLikes[];

    @OneToMany(() => Report, r => r.course)
    reports: Report[];

    @OneToMany(() => PurchasedCourses, pc=> pc.course)
    purchasedCourses: PurchasedCourses[];

    @OneToMany(() => CourseLessons, cl => cl.course)
    courseLessons: CourseLessons[];


    
}