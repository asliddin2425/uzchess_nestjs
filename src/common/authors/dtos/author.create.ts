import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthorCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullName: string;
}