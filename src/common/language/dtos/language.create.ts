import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LanguageCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    code: string;
}