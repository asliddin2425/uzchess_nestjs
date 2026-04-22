import { Injectable } from '@nestjs/common';
import { AuthorPublicListDto } from '../dtos/public/author.list.public.dto';
import { Author } from '../author.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AuthorPublicService {
  async findAll(): Promise<AuthorPublicListDto[]> {
    const author = await Author.find();
    const data = plainToInstance(AuthorPublicListDto, author, {
      excludeExtraneousValues: true,
    });
    return data;
  }

  async findOne(id: number): Promise<AuthorPublicListDto> {
    const author = await Author.findOneBy({ id });
    const data = plainToInstance(AuthorPublicListDto, author, {
      excludeExtraneousValues: true,
    });
    return data;
  }
}
