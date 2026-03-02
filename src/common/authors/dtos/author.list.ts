import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class AuthorListDto {
    @Expose()
    @ApiProperty()
    fullName: string;
}