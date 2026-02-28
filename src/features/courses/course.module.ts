import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "./entities/course.entity";
import { CourseCategory } from "./entities/courseCategory.entity";
import { CourseService } from "./services/course.service";
import { CourseCategoryService } from "./services/courseCategory.service";
import { CourseLessonsService } from "./services/courseLesson.service";
import { CourseLessons } from "./entities/courseLesson.entity";
import { CourseLikes } from "./entities/courseLikes.entity";
import { CourseLikesService } from "./services/courseLikes.service";
import { CourseReview } from "./entities/courseReview.entity";
import { CourseReviewService } from "./services/courseReview.service";
import { CourseSection } from "./entities/courseSection.entity";
import { CourseSectionService } from "./services/courseSection.service";
import { PurchasedCourses } from "./entities/purchasedCourses.entity";
import { PurchasedCourseService } from "./services/purchasedCourses.service";
import { CourseController } from "./controllers/course.controller";
import { CourseCategoryController } from "./controllers/courseCategory.controller";
import { CourseLikesController } from "./controllers/courseLikes.controller";
import { CourseReviewController } from "./controllers/courseReview.controller";
import { CourseSectionController } from "./controllers/courseSection.controller";
import { PurchasedCourseController } from "./controllers/purchasedCourse.controller";
import { UserLessonsService } from "./services/userLessons.service";
import { UserLessonController } from "./controllers/userLesson.controller";
import { UserLessons } from "./entities/userLessons.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        Course, 
        CourseCategory, 
        CourseLessons, 
        CourseLikes, 
        CourseReview,
        CourseSection, 
        PurchasedCourses,
        UserLessons

    ])],
    controllers: [
        CourseController, 
        CourseCategoryController,
        CourseLikesController,
        CourseReviewController,
        CourseSectionController,
        PurchasedCourseController,
        UserLessonController
    ],
    providers: [
        CourseService, 
        CourseCategoryService, 
        CourseLessonsService, 
        CourseLikesService, 
        CourseReviewService, 
        CourseSectionService,
        PurchasedCourseService,
        UserLessonsService
    ]
})
export class CourseModule{}