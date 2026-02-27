import { ApiProperty } from "@nestjs/swagger";
import { IsDate,  IsInt,  IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class BooksUpdateDto {
    @ApiProperty()
    @IsOptional()
    @IsInt()
    authorId: number;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    categoryId: number

    @ApiProperty()
    @IsOptional()
    @IsInt()
    languageId: number;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    difficultyId: number;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    price: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    newPrice: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    rating: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    reviewCount: number

    @ApiProperty()
    @IsInt()
    @IsOptional()
    pages: number


    @ApiProperty()
    @IsDate()
    @IsOptional()
    pubDate: Date;

}