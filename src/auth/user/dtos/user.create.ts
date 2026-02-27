import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { LoginType } from "src/common/enums/enums";

export class UserCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    fullName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    profileImg: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    login: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(LoginType)
    loginType: LoginType;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    password: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    birthDate: Date;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isverified: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;
}