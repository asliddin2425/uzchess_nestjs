import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class NewsCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;
}