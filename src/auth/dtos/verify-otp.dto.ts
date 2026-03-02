import { ApiProperty } from "@nestjs/swagger";
import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class VerifyOtpDto {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login: string;


    @IsString()
    @MaxLength(6)
    @MinLength(6)
    @ApiProperty()
    code: string;
}