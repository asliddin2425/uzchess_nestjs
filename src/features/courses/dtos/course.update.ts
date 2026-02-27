import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseCreateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    authorId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    categoryId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    languageId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    difficultyId: number

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @MaxLength(128)
    price: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @MaxLength(128)
    newPrice: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    reviewCounts: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    rating: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    sectionCount: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    lessonCount: number; 
}