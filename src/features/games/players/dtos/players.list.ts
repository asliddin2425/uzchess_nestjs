import { Expose, Type } from "class-transformer";
import { Country } from "src/common/countries/countries.entity";

export class PlayersListDto {
    @Expose()
    @Type(() => Country)
    countryId: number;

    @Expose()
    fullName: string;

    @Expose()
    image: string;

    @Expose()
    classic: number;

    @Expose()
    rapid: number;

    @Expose()
    blitz: number;
}