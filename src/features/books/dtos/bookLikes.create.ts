import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class BookLikesCreateDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    bookId: number;
}