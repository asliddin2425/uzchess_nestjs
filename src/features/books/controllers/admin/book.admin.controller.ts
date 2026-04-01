import { Body, Controller, Delete, Param, Post, UploadedFile } from "@nestjs/common";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { BooksServiceAdmin } from "../../services/admin/book.admin.service";
import { UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { storageOptions } from "src/config/multer.config";
import { BooksCreateAdminDto } from "../../dtos/admin/books.create.admin.dto";
@ApiTags("Books - Admin")
@Controller("admins/books")
export class BooksControllerAdmin {
    constructor(
        private readonly service: BooksServiceAdmin
    ) {}


    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("image", {storage: storageOptions}))
    async create(@Body() payload: BooksCreateAdminDto, @UploadedFile() image?: Express.Multer.File) {
        return await this.service.create(payload, image)
    }


    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }

    

}