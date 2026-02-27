import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AuthorUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    fullName: string;
}