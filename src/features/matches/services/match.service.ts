import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Match } from '../entities/match.entity';
import { plainToInstance } from 'class-transformer';
import { MatchListDto } from '../dtos/match.list';
import { MatchCreateDto } from '../dtos/match.create';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private readonly repo: Repository<Match>,
  ) {}

  async getAll() {
    const rawMatches = await this.repo.find();
    const matches = plainToInstance(MatchListDto, rawMatches, {
      excludeExtraneousValues: true,
    });
    return matches;
  }

  async getOne(id: number) {
    const rawMatches = await this.repo.findOneBy({ id });
    if (!rawMatches) {
      throw new NotFoundException('Not Found');
    }
    return plainToInstance(MatchListDto, rawMatches, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: MatchCreateDto) {
    const newMatches = await this.repo.create(payload as Match);
    await this.repo.save(newMatches);
    return (
      plainToInstance(MatchListDto, newMatches),
      {
        excludeExtraneousValues: true,
      }
    );
  }

  async delete(id: number) {
    const matches = await this.repo.findOneBy({ id });
    if (!matches) {
      throw new NotFoundException('Not Found');
    }
    return await this.repo.remove(matches);
  }
}
