import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorServiceAdmin } from '../services/author.admin.service';
import { AuthorAdminCreateDto } from '../dtos/admin/author.create.admin.dto';

@ApiTags('Author - Admin')
@Controller('admins/author')
export class AuthorControllerAdmin {
  constructor(private readonly service: AuthorServiceAdmin) {}

  @Post()
  async create(@Body() payload: AuthorAdminCreateDto) {
    return await this.service.create(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
