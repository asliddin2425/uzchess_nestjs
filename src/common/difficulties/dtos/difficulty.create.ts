import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class DifficultyCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    title: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    icon: string;
}