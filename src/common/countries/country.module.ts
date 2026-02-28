import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Country } from "./countries.entity";
import { CountryService } from "./country.service";
import { CountryController } from "./controllers/country.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Country])],
    controllers: [CountryController],
    providers: [CountryService]
})
export class CountryModule{}