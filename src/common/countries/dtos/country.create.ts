import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CountryCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    flag: string;
}