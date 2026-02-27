import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class TermsUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    content: string;
}