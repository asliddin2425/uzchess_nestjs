import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorAdminCreateDto } from '../dtos/admin/author.create.admin.dto';
import { Author } from '../author.entity';

@Injectable()
export class AuthorServiceAdmin {
  async create(payload: AuthorAdminCreateDto): Promise<Author> {
    const newAuthor = Author.create({ ...(payload as Partial<Author>) });
    const savedAuthor = await Author.save(newAuthor);
    return savedAuthor as Author;
  }

  async delete(id: number): Promise<undefined> {
    const author = await Author.findOneBy({ id });
    if (!author) {
      throw new NotFoundException('Not Found');
    }
    await Author.remove(author);
  }
}
