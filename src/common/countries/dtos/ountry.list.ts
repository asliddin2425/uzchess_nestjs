import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CountryListDto {
    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    flag: string;
}