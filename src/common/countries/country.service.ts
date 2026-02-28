import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Country } from "./countries.entity";
import { plainToInstance } from "class-transformer";
import { CountryListDto } from "./dtos/ountry.list";
import { CountryCreateDto } from "./dtos/country.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable() 
export class CountryService {
    constructor(
        @InjectRepository(Country)
        private readonly repo: Repository<Country>,
    ) {}


    async getall() {
        const rawCountry = await this.repo.find();
        const country = plainToInstance(
            CountryListDto,
            rawCountry,
            {
                excludeExtraneousValues: true
            },
        )
        return country;
    }


    async getOne(id: number) {
        const rawCountry = await this.repo.findOneBy({id})
        if(!rawCountry) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            CountryListDto, 
            rawCountry,
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: CountryCreateDto) {
        const newCountry = this.repo.create(payload as Country)
        await this.repo.save(newCountry)
        return plainToInstance(CountryListDto, newCountry), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const country = await this.repo.findOneBy({id})
        if(!country) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(country)
    }

}