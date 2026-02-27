import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class PurchasedCourseupdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    courseId: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isCompleted: boolean;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
}