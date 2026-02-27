import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class BookCategoryListDto {
    @Expose()
    @ApiProperty()
    title: string;
}