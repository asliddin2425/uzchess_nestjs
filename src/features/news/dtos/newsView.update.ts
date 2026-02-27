import { ApiProperty } from "@nestjs/swagger";
import { IsDataURI, IsDate, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class NewsViewUpdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    newsId: number;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    firstDate: Date;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    lastDate: Date;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    count: number;
}