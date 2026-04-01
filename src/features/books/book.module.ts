
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Books } from "./entities/books.entity";
import { BookCategory } from "./entities/bookCategory.entity";
import { BookLikes } from "./entities/bookLikes.entity";
import { BookLikesService } from "./services/bookLikes.service";
import { BookReview } from "./entities/bookReview.entity";
import { BookReviewService } from "./services/bookReview.service";
import { BooksLikesController } from "./controllers/bookLikes.controller";
import { BookReviewController } from "./controllers/bookReview.controller";
import { BooksControllerAdmin } from "./controllers/admin/book.admin.controller";
import { BooksPublicService } from "./services/public/book.public.service";
import { BooksServiceAdmin } from "./services/admin/book.admin.service";
import { BooksControllerPublic } from "./controllers/public/books.public.controller";
import { BookCategoryControllerAdmin } from "./controllers/admin/bookCategory.admin.controller";
import { BookCategoryControllerPublic } from "./controllers/public/bookCategory.public.controller";
import { BookCategoryServiceAdmin } from "./services/admin/bookCategory.admin.service";
import { BookCategoryPublicService } from "./services/public/bookCategory.public.service";

@Module({
    imports: [TypeOrmModule.forFeature([Books, BookCategory, BookLikes, BookReview])],
    controllers: [BooksLikesController, BookReviewController, BooksControllerAdmin, BooksControllerPublic, BookCategoryControllerAdmin, BookCategoryControllerPublic],
    providers: [BookLikesService, BookReviewService, BooksServiceAdmin, BooksPublicService, BookCategoryServiceAdmin, BookCategoryPublicService],
})
export class BooksModule{}