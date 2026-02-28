import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Difficulties } from "./difficulties.entity";
import { plainToInstance } from "class-transformer";
import { DifficultyListDto } from "./dtos/difficulty.list";
import { DifficultyCreateDto } from "./dtos/difficulty.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DifficultyService {
    constructor(
        @InjectRepository(Difficulties)
        private readonly repo: Repository<Difficulties>,
    ) {}

    async getAll() {
        const rawDifficulty = await this.repo.find()
        const difficulty = plainToInstance(
            DifficultyListDto, 
            rawDifficulty,
            {
                excludeExtraneousValues: true
            },
        )
        return difficulty;
    }

    async getOne(id: number) {
        const rawDifficulty = await this.repo.findOneBy({id})
        if(!rawDifficulty) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            DifficultyListDto,
            rawDifficulty,
            {excludeExtraneousValues: true}
        )
    }


    async create(payload: DifficultyCreateDto) {
        const newDifficulty = this.repo.create(payload as unknown as Difficulties)
        await this.repo.save(newDifficulty)
        return plainToInstance(DifficultyListDto, newDifficulty), {
            excludeExtraneousValues: true,
        }
    }

    async delete(id: number) {
        const difficulty = await this.repo.findOneBy({id})
        if(!difficulty) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(difficulty)
    }


}