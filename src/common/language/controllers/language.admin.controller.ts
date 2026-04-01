import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LanguageServiceAdmin } from "../services/language.admin.service";
import { LanguageAdminCreateDto } from "../dtos/admin/language.admin.create.dto";

@ApiTags("Language - Admin")
@Controller("admins/languages")
export class LanguageControllerAdmin {
    constructor(
        private readonly service: LanguageServiceAdmin
    ) {}

    @Post()
    async create(@Body() payload: LanguageAdminCreateDto) {
        return await this.service.create(payload)
    }


    @Delete(":id")
    async delete(@Param("id") id:number) {
        return await this.service.delete(id);
    }
}