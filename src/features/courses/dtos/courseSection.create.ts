import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseSectionCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    title: string

    @ApiProperty()
    @IsInt()
    @IsOptional()
    order: number;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;
}