import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class RemoveCourseLikeDto {

    @ApiProperty()
    @IsInt()
    courseId: number;
}