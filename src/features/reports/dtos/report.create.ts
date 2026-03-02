import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { ReportType } from "src/common/enums/enums";

export class ReportCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    reportCategoryId: number;

    @ApiProperty()
    @IsEnum(ReportType)
    @IsNotEmpty()
    target: ReportType;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(256)
    description: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;
}