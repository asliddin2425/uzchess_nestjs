import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Languages } from "./language.entity";
import { plainToInstance } from "class-transformer";
import { LanguageListDto } from "./dtos/language.list";
import { LanguageCreateDto } from "./dtos/language.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class Languageservice {
    constructor(
        @InjectRepository(Languages)
        private readonly repo: Repository<Languages>,
    ) {}

    async getAll() {
        const rawLanguage = await this.repo.find();
        const language = plainToInstance(
            LanguageListDto,
            rawLanguage,
            {
                excludeExtraneousValues: true
            },
        )
        return language;
    }

    async getOne(id: number) {
        const rawLanguage = await this.repo.findOneBy({id})
        if(!rawLanguage) {
            throw new NotFoundException("NOt Found")
        }
        return plainToInstance(
            LanguageListDto,
            rawLanguage, 
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: LanguageCreateDto) {
        const newlanguage = this.repo.create(payload as Languages)
        await this.repo.save(newlanguage)
        return plainToInstance(LanguageListDto, newlanguage), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const language = await this.repo.findOneBy({id})
        if(!language) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(language)
    }

}