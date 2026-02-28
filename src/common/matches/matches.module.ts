import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Matches } from "./matches.entity";
import { MatchesService } from "./matches.service";
import { MatchesController } from "./controllers/matches.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Matches])],
    controllers: [MatchesController],
    providers: [MatchesService]
})
export class MatchesModule{}