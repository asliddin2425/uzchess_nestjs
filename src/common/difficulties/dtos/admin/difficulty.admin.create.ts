import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class DifficultyAdminCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    title: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    icon: string;
}