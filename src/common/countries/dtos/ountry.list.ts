import { Expose } from "class-transformer";

export class CountryListDto {
    @Expose()
    title: string;

    @Expose()
    flag: string;
}