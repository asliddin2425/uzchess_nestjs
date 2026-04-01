import { Injectable } from "@nestjs/common";

import { plainToInstance } from "class-transformer";
import { LanguagePublicDetailDto } from "../dtos/public/language.public.detail.dto";
import { Languages } from "../language.entity";

@Injectable()
export class LanguagePublicService {
    async findAll(): Promise<LanguagePublicDetailDto[]> {
        const language = await Languages.find()
        const data = plainToInstance(LanguagePublicDetailDto, language, {excludeExtraneousValues: true})
        return data;
    }


    async findOne(id: number): Promise<LanguagePublicDetailDto> {
        const language = await Languages.findOneBy({id})
        const data = plainToInstance(LanguagePublicDetailDto, language, {excludeExtraneousValues: true});
        return data;
    }
}