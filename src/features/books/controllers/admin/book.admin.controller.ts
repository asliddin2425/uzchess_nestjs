import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksServiceAdmin } from '../../services/admin/book.admin.service';
import { BooksCreateAdminDto } from '../../dtos/admin/books.create.admin.dto';
@ApiTags('Books - Admin')
@Controller('admins/books')
export class BooksControllerAdmin {
  constructor(private readonly service: BooksServiceAdmin) {}

  @Post()
  async create(@Body() payload: BooksCreateAdminDto) {
    return await this.service.create(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
