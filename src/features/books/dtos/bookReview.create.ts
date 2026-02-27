import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsSemVer, IsString, MaxLength } from "class-validator";

export class CreateBookReviewDto {
 
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    bookId: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(512)
    comment: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;
}