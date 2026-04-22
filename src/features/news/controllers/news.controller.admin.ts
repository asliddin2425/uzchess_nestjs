import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsServiceAdmin } from '../services/news.service.admin';
import { NewsCreateDtoAdmin } from '../dtos/admin/news.create.dto.admin';

@ApiTags('News - Admin')
@Controller('admins/news')
export class NewsControllerAdmin {
  constructor(private readonly service: NewsServiceAdmin) {}

  @Post()
  async create(@Body() payload: NewsCreateDtoAdmin) {
    return await this.service.create(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
