import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { OtpType } from "src/common/enums/enums";

export class OtpCreateDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(OtpType)
    type: OtpType;
}