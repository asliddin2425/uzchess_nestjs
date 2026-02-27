import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CourseCategoryCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    title: string;
}