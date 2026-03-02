import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class SetPasswordDto {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login: string;

    @IsString()
    @ApiProperty()
    @MaxLength(6)
    @MinLength(6)
    code: string

    @IsString()
    @MaxLength(32)
    @ApiProperty()
    password: string;
}