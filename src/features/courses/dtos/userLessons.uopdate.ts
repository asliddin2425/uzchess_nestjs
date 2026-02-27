import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class UserLessonsUpdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    userId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    courseLessonId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    stoppedAt: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isCompleted: boolean;
}
