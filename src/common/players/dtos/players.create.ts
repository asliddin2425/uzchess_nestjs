import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class PlayersCreateDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    countryId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    fullName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    classic: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    rapid: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    blitz: number;
}