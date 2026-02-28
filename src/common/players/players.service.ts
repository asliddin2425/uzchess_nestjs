import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Players } from "./players.entity";
import { plainToInstance } from "class-transformer";
import { PlayersListDto } from "./dtos/players.list";
import { PlayersCreateDto } from "./dtos/players.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(Players)
        private readonly repo: Repository<Players>,
    ) {}


    async getAll() {
        const rawPlayers = await this.repo.find();
        const players = plainToInstance(
            PlayersListDto,
            rawPlayers,
            {
                excludeExtraneousValues: true
            },
        )
        return players;
    }

    async getOne(id: number) {
        const rawPlayers = await this.repo.findOneBy({id})
        if(!rawPlayers) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            PlayersListDto, rawPlayers, 
            {excludeExtraneousValues: true}
        )
    }

    async create(payload: PlayersCreateDto) {
        const newPlayers = await this.repo.create(payload as Players)
        await this.repo.save(newPlayers)
        return plainToInstance(
            PlayersListDto, newPlayers,{
                excludeExtraneousValues: true
            }
        )
    }


    async delete(id: number) {
        const players = await this.repo.findOneBy({id})
        if(!players) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(players)
    }


}