import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { MatchesService } from "./services/match.service";
import { MatchController } from "./controllers/match.controller";
import { PlayerController } from "./controllers/players.controller";
import { PlayerService } from "./services/players.service";
import { Players } from "./entities/players.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Match, Players])],
    controllers: [MatchController, PlayerController],
    providers: [MatchesService, PlayerService]
})
export class MatchesModule{}