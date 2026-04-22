import { Injectable } from '@nestjs/common';
import { BookCategory } from '../entities/bookCategory.entity';
import { PaginationFilters } from 'src/common/filters/pagination.filters';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class BooksCategoryAdminRepository {
  constructor(private readonly config: ConfigService) {}
  async create(bookCategory: BookCategory) {
    await BookCategory.save(bookCategory);
    return bookCategory;
  }

  async getOneById(id: number) {
    return await BookCategory.findOneBy({ id });
  }

  async getAll(filters: PaginationFilters) {
    const take = filters.size ?? this.config.getOrThrow<number>('DEFAULT_SIZE');
    const currentPage =
      filters.page ?? this.config.getOrThrow<number>('DEFAULT_PAGE');
    const skip = (currentPage - 1) * take;
    const totalCount = await BookCategory.count();
    const totalPages = Math.ceil(totalCount / take);
    const previosuPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const data = await BookCategory.find({ take: take, skip: skip });
    return { totalPages, data, currentPage, previosuPage, nextPage };
  }

  async save(bookCategory: BookCategory) {
    return await BookCategory.save(bookCategory);
  }
}
