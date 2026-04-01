import { Allow } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class BooksCreateAdminDto{
    @Type(() => Number)
    @IsInt()
    @ApiProperty()
    authorId: number;

    @Type(() => Number)
    @IsInt()
    @ApiProperty()
    categoryId: number;

    @Type(() => Number)
    @IsInt()
    @ApiProperty()
    languageId: number;

    @Type(() => Number)
    @IsInt()
    @ApiProperty()
    difficultyId: number;

    @IsString()
    @MaxLength(128)
    @ApiProperty()
    title: string;

    @IsString()
    @ApiProperty()
    description: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image: string;

    @Type(() => Number)
    @IsNumber()
    @ApiProperty()
    price: number;

    @Type(() => Number)
    @IsNumber()
    @ApiProperty()
    newPrice: number;

    @Type(() => Number)
    @IsNumber()
    @ApiProperty()
    pages: number;


    @IsDateString()
    @ApiProperty({example: '2026-01-01T14:50:24.000Z'})
    pubDate: Date;
}