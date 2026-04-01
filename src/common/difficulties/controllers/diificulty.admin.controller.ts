import { Body, Controller, Delete, Param, Post, UploadedFile} from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { storageOptions } from "src/config/multer.config";
import { DifficultyServiceAdmin } from "../services/difficulty.admin.service";
import { DifficultyAdminCreateDto } from "../dtos/admin/difficulty.admin.create";


@ApiTags("Difficulty - Admin")
@Controller("admins/difficulty")
export class DifficultyControllerAdmin {
    constructor (
        private readonly service: DifficultyServiceAdmin
    ) {}


    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("icon", {storage: storageOptions}))
    async create(@Body() payload: DifficultyAdminCreateDto, @UploadedFile() icon?: Express.Multer.File) {
        return await this.service.create(payload, icon)
    }


    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id);
    }
}


