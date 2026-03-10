import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString, MaxLength } from "class-validator";
import { LoginType } from "src/core/enums/loginType.enum";

export class ResendOtpDto {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login: string;

    @IsEnum(LoginType)
    @ApiProperty()
    loginType: LoginType;
}