import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseReviewUpdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    courseId: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    rating: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(512)
    cooment: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
}