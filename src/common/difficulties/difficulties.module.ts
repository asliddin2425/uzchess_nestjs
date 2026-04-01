import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Difficulties } from "./difficulties.entity";
import { DifficultyControllerAdmin } from "./controllers/diificulty.admin.controller";
import { DifficultyServiceAdmin } from "./services/difficulty.admin.service";
import { DifficultyControllerPublic } from "./controllers/diificulty.public.controller";
import { DifficultyPublicService } from "./services/difficulty.public.service";

@Module({
    imports: [TypeOrmModule.forFeature([Difficulties])],
    controllers: [DifficultyControllerAdmin, DifficultyControllerPublic],
    providers: [DifficultyServiceAdmin, DifficultyPublicService]
})
export class DifficultyModule{}