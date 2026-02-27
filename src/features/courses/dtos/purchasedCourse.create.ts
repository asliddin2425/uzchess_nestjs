import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, IsNotEmpty } from "class-validator";

export class PurchasedCourseCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isCompleted: boolean;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;
}