import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class BookCategoryUpdateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    title: string;
}