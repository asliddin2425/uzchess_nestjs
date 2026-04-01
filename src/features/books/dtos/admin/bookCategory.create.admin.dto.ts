import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class BookCategoryAdminCreateDto {
    @ApiProperty()
    @IsString()
    @MaxLength(64)
    title: string;
}