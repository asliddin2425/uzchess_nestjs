import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class NewsUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(256)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    content: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
}