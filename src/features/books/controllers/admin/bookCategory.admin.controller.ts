import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BookCategoryServiceAdmin } from '../../services/admin/bookCategory.admin.service';
import { BookCategoryAdminCreateDto } from '../../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryPublicListDto } from '../../dtos/public/bookCategory.public.list.dto';
import { PaginationFilters } from 'src/common/filters/pagination.filters';
import { PaginatedResultDto } from 'src/common/filters/paginated-result.dto';

@ApiTags('BookCategory - Admin')
@Controller('admins/book-category')
export class BookCategoryControllerAdmin {
  constructor(private readonly service: BookCategoryServiceAdmin) {}

  @Post()
  async create(@Body() payload: BookCategoryAdminCreateDto) {
    return await this.service.create(payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }

  @Get()
  @ApiOkResponse({ type: () => PaginatedResultDto(BookCategoryPublicListDto) })
  async getAll(@Query() filters: PaginationFilters) {
    return await this.service.getAll(filters);
  }
}
