import { IsEnum, IsInt, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";
import { OtpType } from "src/common/enums/enums";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/user/entities/user.entity";

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