import { Body, Controller, Delete, Param, Post, UploadedFile} from "@nestjs/common";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { NewsServiceAdmin } from "../services/news.service.admin";
import { UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { NewsCreateDtoAdmin } from "../dtos/admin/news.create.dto.admin";
import { storageOptions } from "src/config/multer.config";


@ApiTags("News - Admin")
@Controller("admins/news")
export class NewsControllerAdmin {
    constructor (
        private readonly service: NewsServiceAdmin
    ) {}


    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("image", {storage: storageOptions}))
    async create(@Body() payload: NewsCreateDtoAdmin, @UploadedFile() image: Express.Multer.File) {
        return await this.service.create(payload, image)
    }


    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id);
    }
}


