import { Injectable, NotFoundException } from "@nestjs/common";
import { LanguageAdminCreateDto } from "../dtos/admin/language.admin.create.dto";
import { Languages } from "../language.entity";


@Injectable()
export class LanguageServiceAdmin {
    async create(payload: LanguageAdminCreateDto): Promise<Languages> {
        const newLanguage = Languages.create({ ...(payload as Partial<Languages>) });
        const savedLanguages = await Languages.save(newLanguage);
        return savedLanguages as Languages;
    }

    async delete(id: number): Promise<undefined> {
        const language = await Languages.findOneBy({id});
        if(!language) {
            throw new NotFoundException("Not Found")
        }
        await Languages.remove(language)
    } 
}