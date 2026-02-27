import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { ReportType } from "src/common/enums/enums";

export class ReportUpdateDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    reportCategoryId: number;

    @ApiProperty()
    @IsEnum(ReportType)
    @IsOptional()
    target: ReportType;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(256)
    description: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
}