import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { LoginType } from "src/common/enums/enums";

export class UserUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(64)
    fullName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    profileImg: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(64)
    login: string;

    @ApiProperty()
    @IsOptional()
    @IsEnum(LoginType)
    loginType: LoginType;


    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    password: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    birthDate: Date;

    @ApiProperty()
    @IsBoolean()
   @IsOptional()
    isverified: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}