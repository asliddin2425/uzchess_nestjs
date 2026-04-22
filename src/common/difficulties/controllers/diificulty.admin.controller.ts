import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DifficultyServiceAdmin } from '../services/difficulty.admin.service';
import { DifficultyAdminCreateDto } from '../dtos/admin/difficulty.admin.create';

@ApiTags('Difficulty - Admin')
@Controller('admins/difficulty')
export class DifficultyControllerAdmin {
  constructor(private readonly service: DifficultyServiceAdmin) {}

  @Post()
  async create(@Body() payload: DifficultyAdminCreateDto) {
    return await this.service.create(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
