import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseReviewCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(512)
    cooment: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;
}