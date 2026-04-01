import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class BookCategoryUpdateAdminDto{
    @IsString()
    @MaxLength(64)
    @IsOptional()
    @ApiProperty()
    title: string;
}