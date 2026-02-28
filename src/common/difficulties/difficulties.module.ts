import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Difficulties } from "./difficulties.entity";
import { DifficultyService } from "./difficulties.service";
import { DifficultyController } from "./difficulty.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Difficulties])],
    controllers: [DifficultyController],
    providers: [DifficultyService]
})
export class DifficultyModule{}