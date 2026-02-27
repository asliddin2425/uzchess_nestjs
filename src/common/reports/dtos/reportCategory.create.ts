import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class ReportCategoryCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    title: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    order: number;
}