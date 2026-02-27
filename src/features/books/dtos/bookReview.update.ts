import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsSemVer, IsString, MaxLength } from "class-validator";

export class UpdateBookReviewDto {
 
    @ApiProperty()
    @IsInt()
    @IsOptional()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    bookId: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    rating: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(512)
    comment: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
}

