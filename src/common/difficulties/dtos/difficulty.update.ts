import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class DifficultyUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(32)
    title: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    icon: string;
}