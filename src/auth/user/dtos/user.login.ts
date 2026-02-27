import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserLoginDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    login: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    password: string;
}