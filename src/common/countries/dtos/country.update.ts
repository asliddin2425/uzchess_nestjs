import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CountryUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(64)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    flag: string;
}