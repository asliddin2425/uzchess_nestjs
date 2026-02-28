import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Players } from "./players.entity";
import { PlayerService } from "./players.service";
import { PlayerController } from "./players.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Players])],
    controllers: [PlayerController],
    providers: [PlayerService]
})
export class PlayerModule{}