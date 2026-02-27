import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBookLikeDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    bookId: number;
}