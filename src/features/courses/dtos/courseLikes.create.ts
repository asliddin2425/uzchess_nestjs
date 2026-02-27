import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CourseLikeCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    courseId: number;
}