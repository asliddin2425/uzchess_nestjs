import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { OtpType } from "src/common/enums/enums";

export class VerifyOtpDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code: string;

    @ApiProperty()
    @IsEnum(OtpType)
    type: OtpType;
}