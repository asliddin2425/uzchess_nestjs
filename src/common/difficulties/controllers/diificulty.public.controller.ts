import { Controller, Delete, Get, Param, ParseIntPipe, Req } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import getFullPath from "src/core/utils/getFull-path";
import type { Request } from "express";

import { DifficultyPublicService } from "../services/difficulty.public.service";
import { DifficultyAdminDetailDto } from "../dtos/admin/difficulty.admin.detail.dto";

@ApiTags("Difficulty - Public")
@Controller("public/difficulty")
export class DifficultyControllerPublic {
    constructor(
        private readonly service: DifficultyPublicService
    ) {}

    @Get()
    @ApiOkResponse({type: () => DifficultyAdminDetailDto, isArray: true})
    async findAll(@Req() req: Request): Promise<DifficultyAdminDetailDto[]> {
        const difficulty = await this.service.findAll();
        difficulty.forEach((item: any) => (item.image = getFullPath(req, item.image)));
        return difficulty;
    }

    @Get(":id")
    @ApiOkResponse({type: () => DifficultyAdminDetailDto, isArray: true})
    async findOne(@Param("id", ParseIntPipe) id: number): Promise<DifficultyAdminDetailDto> {
        return await this.service.findOne(id)
    }
}