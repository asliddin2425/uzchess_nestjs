import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCategoryAdminCreateDto } from '../../dtos/admin/bookCategory.create.admin.dto';
import { BookCategory } from '../../entities/bookCategory.entity';
import { BooksCategoryAdminRepository } from '../../repositories/books-catgegory.admin.repository';
import { BookCategoryUpdateAdminDto } from '../../dtos/admin/bookCategory.update.admin.dto';
import { plainToInstance } from 'class-transformer';
import { BookCategoryPublicListDto } from '../../dtos/public/bookCategory.public.list.dto';
import { PaginationFilters } from 'src/common/filters/pagination.filters';

@Injectable()
export class BookCategoryServiceAdmin {
  constructor(private readonly repo: BooksCategoryAdminRepository) {}

  // async create(payload: BookCategoryAdminCreateDto): Promise<BookCategory> {
  //     const newBookCategory = BookCategory.create({ ...(payload as Partial<BookCategory>) });
  //     const savedBookCategory = await BookCategory.save(newBookCategory);
  //     return savedBookCategory as BookCategory;
  // }

  async create(payload: BookCategoryAdminCreateDto) {
    const bookCategory = payload as BookCategory;
    return await this.repo.create(bookCategory);
  }

  async delete(id: number): Promise<undefined> {
    const author = await BookCategory.findOneBy({ id });
    if (!author) {
      throw new NotFoundException('Not Found');
    }
    await BookCategory.remove(author);
  }

  async updateOne(id: number, payload: BookCategoryUpdateAdminDto) {
    const bookCategory = await this.repo.getOneById(id);
    if (!bookCategory) {
      throw new NotFoundException('Not Found');
    }
    bookCategory.title = payload.title;
    return await this.repo.save(bookCategory);
  }
  async getAll(filters: PaginationFilters) {
    const result = await this.repo.getAll(filters);
    const data = plainToInstance(BookCategoryPublicListDto, result.data);
    return { ...result, data };
  }
}
