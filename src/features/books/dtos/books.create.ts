import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDecimal, IsIn, IsInt, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class BooksCreateDto {
    @ApiProperty()
    @IsInt()
    authorId: number;

    @ApiProperty()
    @IsInt()
    categoryId: number

    @ApiProperty()
    @IsInt()
    languageId: number;

    @ApiProperty()
    @IsInt()
    difficultyId: number;
    
    @ApiProperty()
    @IsString()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    newPrice: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    reviewCount: number

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    pages: number


    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    pubDate: Date;

}