import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty } from "class-validator";

export class NewsViewCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    newsId: number;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    firstDate: Date;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    lastDate: Date;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    count: number;
}