import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { Author } from "src/common/authors/author.entity";
import { BookCategory } from "../entities/bookCategory.entity";
import { Languages } from "src/common/language/language.entity";
import { Difficulties } from "src/common/difficulties/difficulties.entity";
import { IsOptional } from "class-validator";

export class BooksListDto {
    @Expose()
    @ApiProperty()
    @Type(() => Author)
    authorId: number;

    @Expose()
    @ApiProperty()
    @Type(() => BookCategory)
    categoryId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Languages)
    languageId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Difficulties)
    difficultyId: number;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    description: string;

    @Expose()
    @ApiProperty()
    image: string;

    @Expose()
    @ApiProperty()
    price: number;

    @Expose()
    @ApiProperty()
    newPrice: number;

    @Expose()
    @ApiProperty()
    rating: number;

    @Expose()
    @ApiProperty()
    reviewCount: number;

    @Expose()
    @ApiProperty()
    pages: number;

    @Expose()
    @ApiProperty()
    pubDate: Date;
}