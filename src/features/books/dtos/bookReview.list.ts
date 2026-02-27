import { Expose, Type } from "class-transformer";
import { User } from "src/auth/user/entities/user.entity";
import { Books } from "../entities/books.entity";

export class BookReviewListDto {

    @Expose()
    @Type(() => User)
    userId: number;

    @Expose()
    @Type(() => Books)
    bookId: number;

    @Expose()
    rating: number;

    @Expose()
    comment: string;

    @Expose()
    date: Date;
}