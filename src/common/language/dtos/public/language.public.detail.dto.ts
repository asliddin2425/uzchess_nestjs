import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class LanguagePublicDetailDto {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    code: string;
}