import { IsEnum, IsInt, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";
import { OtpType } from "../../../core/enums/otpType.enum";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";

export class ListOtpDto {

    @ApiProperty()
    @IsOptional()
    @Type(() => User)
    @IsInt()
    userId: number;

    @IsOptional()
    @IsEnum(OtpType)
    type?: OtpType;
}