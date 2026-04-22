import { Injectable, NotFoundException } from '@nestjs/common';
import { DifficultyAdminCreateDto } from '../dtos/admin/difficulty.admin.create';
import { Difficulties } from '../difficulties.entity';

@Injectable()
export class DifficultyServiceAdmin {
  async create(payload: DifficultyAdminCreateDto): Promise<Difficulties> {
    const newDifficulty = Difficulties.create(payload);
    await Difficulties.save(newDifficulty);
    return Array.isArray(newDifficulty) ? newDifficulty[0] : newDifficulty;
  }

  async delete(id: number): Promise<undefined> {
    const news = await Difficulties.findOneBy({ id });
    if (!news) {
      throw new NotFoundException('Not found');
    }
    await Difficulties.remove(news);
  }
}
