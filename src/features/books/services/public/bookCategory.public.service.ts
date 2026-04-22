import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategoryPublicListDto } from '../../dtos/public/bookCategory.public.list.dto';
import { BookCategory } from '../../entities/bookCategory.entity';

@Injectable()
export class BookCategoryPublicService {
  async findAll(): Promise<BookCategoryPublicListDto[]> {
    const bookCategory = await BookCategory.find();
    const data = plainToInstance(BookCategoryPublicListDto, bookCategory, {
      excludeExtraneousValues: true,
    });
    return data;
  }

  async findOne(id: number): Promise<BookCategoryPublicListDto> {
    const bookCategory = await BookCategory.findOneBy({ id });
    const data = plainToInstance(BookCategoryPublicListDto, bookCategory, {
      excludeExtraneousValues: true,
    });
    return data;
  }
}
