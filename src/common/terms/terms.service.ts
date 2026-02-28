import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Terms } from "./terms.entity";
import { plainToInstance } from "class-transformer";
import { TermsListDto } from "./dtos/terms.list";
import { TermsCreateDto } from "./dtos/terms.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TermsService {
    constructor(
        @InjectRepository(Terms)
        private readonly repo: Repository<Terms>,
    ) {}


    async getAll() {
        const rawTerms = await this.repo.find()
        const terms = plainToInstance(
            TermsListDto,
            rawTerms,
            {
                excludeExtraneousValues: true
            },
        )
        return terms;
    }

    async getOne(id: number) {
        const rawTerms = await this.repo.findOneBy({id})
        if(!rawTerms) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(
            TermsListDto, rawTerms, {
                excludeExtraneousValues: true
            }
        )
    }

    async create(payload: TermsCreateDto) {
        const newTerms = await this.repo.create(payload as Terms)
        await this.repo.save(newTerms)
        return plainToInstance(
            TermsListDto, newTerms,{
                excludeExtraneousValues: true
            }
        )
    }
    
    async delete(id: number) {
        const terms = await this.repo.findOneBy({id})
        if(!terms) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(terms)
    }

}