import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { BookCategoryServiceAdmin } from "../../services/admin/bookCategory.admin.service";
import { BookCategoryAdminCreateDto } from "../../dtos/admin/bookCategory.create.admin.dto";

@ApiTags("BookCategory - Admin")
@Controller("admins/book-category")
export class BookCategoryControllerAdmin {
    constructor(
        private readonly service: BookCategoryServiceAdmin
    ) {}

    @Post()
    async create(@Body() payload: BookCategoryAdminCreateDto) {
        return await this.service.create(payload)
    }


    @Delete(":id")
    async delete(@Param("id") id:number) {
        return await this.service.delete(id);
    }
}