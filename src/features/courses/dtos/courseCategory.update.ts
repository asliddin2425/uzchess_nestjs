import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CourseCategoryCreateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(64)
    title: string;
}