import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseSectionUpdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    courseId: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(256)
    title: string

    @ApiProperty()
    @IsInt()
    @IsOptional()
    order: number;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
}