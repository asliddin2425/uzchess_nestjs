import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { DifficultyPublicDetailDto } from '../dtos/public/difficulty.public.detail.dto';
import { Difficulties } from '../difficulties.entity';

@Injectable()
export class DifficultyPublicService {
  async findAll(): Promise<DifficultyPublicDetailDto[]> {
    const difficulty = await Difficulties.find();
    const data = plainToInstance(DifficultyPublicDetailDto, difficulty, {
      excludeExtraneousValues: true,
    });
    return data;
  }

  async findOne(id: number): Promise<DifficultyPublicDetailDto> {
    const difficulty = await Difficulties.findOneBy({ id });
    const data = plainToInstance(DifficultyPublicDetailDto, difficulty, {
      excludeExtraneousValues: true,
    });
    return data;
  }
}
