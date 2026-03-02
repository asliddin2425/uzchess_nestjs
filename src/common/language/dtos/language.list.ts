import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class LanguageListDto {
    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    code: string;
}