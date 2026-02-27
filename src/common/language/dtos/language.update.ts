import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class LanguageUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(32)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(2)
    code: string;
}