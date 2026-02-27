import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class UserLessonsCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    courseLessonId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    stoppedAt: number;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isCompleted: boolean;
}