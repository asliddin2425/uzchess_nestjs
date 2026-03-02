import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class ReportCategoryUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(64)
    title: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    order: number;
}