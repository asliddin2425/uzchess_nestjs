import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    authorId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    categoryId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    languageId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    difficultyId: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @MaxLength(128)
    price: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @MaxLength(128)
    newPrice: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    reviewCounts: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    sectionCount: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    lessonCount: number; 
}