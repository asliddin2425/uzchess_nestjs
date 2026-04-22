import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BookCategoryPublicService } from '../../services/public/bookCategory.public.service';
import { BookCategoryPublicListDto } from '../../dtos/public/bookCategory.public.list.dto';

@ApiTags('BookCategory- Public')
@Controller('public/book-category')
export class BookCategoryControllerPublic {
  constructor(private readonly service: BookCategoryPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => BookCategoryPublicListDto, isArray: true })
  async findAll(): Promise<BookCategoryPublicListDto[]> {
    const author = await this.service.findAll();
    return author;
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookCategoryPublicListDto, isArray: true })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BookCategoryPublicListDto> {
    return await this.service.findOne(id);
  }
}
