import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, isBoolean, IsDataURI, IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseLessonUpdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    courseId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    courseSectionId: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    content: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    thumbnail: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(256)
    video: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    order: number;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isFree: boolean;
}
