
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Books } from "./entities/books.entity";
import { BooksController } from "./controllers/books.controller";
import { BooksService } from "./services/book.service";
import { BookCategoryService } from "./services/bookCategory.service";
import { BookCategory } from "./entities/bookCategory.entity";
import { BookLikes } from "./entities/bookLikes.entity";
import { BookLikesService } from "./services/bookLikes.service";
import { BookReview } from "./entities/bookReview.entity";
import { BookReviewService } from "./services/bookReview.service";
import { BookCatgoryController } from "./controllers/bookCategory.controller";
import { BooksLikesController } from "./controllers/bookLikes.controller";
import { BookReviewController } from "./controllers/bookReview.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Books, BookCategory, BookLikes, BookReview])],
    controllers: [BooksController, BookCatgoryController, BooksLikesController, BookReviewController],
    providers: [BooksService, BookCategoryService, BookLikesService, BookReviewService],
})
export class BooksModule{}