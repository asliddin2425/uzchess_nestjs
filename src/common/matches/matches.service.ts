import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Matches } from "./matches.entity";
import { plainToInstance } from "class-transformer";
import { MatchesListDto } from "./dtos/matches.list";
import { MatchesCreateDto } from "./dtos/matches.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MatchesService {
    constructor(
        @InjectRepository(Matches)
        private readonly repo: Repository<Matches>,
    ) {}

    async getAll() {
        const rawMatches = await this.repo.find();
        const matches = plainToInstance(
            MatchesListDto,
            rawMatches,
            {
                excludeExtraneousValues: true,
            },
        )
        return matches;
    }

    async getOne(id: number) {
        const rawMatches = await this.repo.findOneBy({id})
        if(!rawMatches) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            MatchesListDto, rawMatches,{
                excludeExtraneousValues: true
            }
        )
    }

    async create(payload: MatchesCreateDto) {
        const newMatches = await this.repo.create(payload as Matches)
        await this.repo.save(newMatches)
        return plainToInstance(MatchesListDto, newMatches),{
            excludeExtraneousValues: true,
        }
    }


    async delete(id: number) {
        const matches = await this.repo.findOneBy({id})
        if(!matches) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(matches)
    }


}