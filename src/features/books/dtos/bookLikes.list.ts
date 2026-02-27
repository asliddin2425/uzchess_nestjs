import { Expose, Type } from "class-transformer";
import { User } from "src/auth/user/entities/user.entity";
import { Books } from "../entities/books.entity";

export class BookLikeListDto {

    @Expose()
    @Type(() => User)
    userId: number;

    @Expose()
    @Type(() => Books)
    bookId: number;
    
    @Expose()
    date: Date;
}