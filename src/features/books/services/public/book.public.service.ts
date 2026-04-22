import { Injectable } from '@nestjs/common';
import { Books } from '../../entities/books.entity';
import { plainToInstance } from 'class-transformer';
import { BooksListPublicDto } from '../../dtos/public/books.list.public.dto';

// @Injectable()
// export class BooksPublicService {
//     async findAll(): Promise<BooksDetailPublicDto[]> {
//         const books = await Books.find()
//         const data = plainToInstance(BooksDetailPublicDto, books, {
//             excludeExtraneousValues: true
//         })
//         return data;
//     }

//     async findOne(id: number): Promise<BooksListPublicDto> {
//         const books = await Books.findOneBy({id})
//         const data  = plainToInstance(BooksListPublicDto, books, {excludeExtraneousValues: true})
//         return data;
//     }
// }

@Injectable()
export class BooksPublicService {
  // async findAll(): Promise<BooksDetailPublicDto[]> {
  async findAll() {
    const books = await Books.find({
      relations: ['author', 'bookCategory', 'languages', 'difficulties'], // shu yerda kerakli relationlarni qo'shing
    });
    // console.log(books);

    // const data = plainToInstance(BooksDetailPublicDto, books, {
    //     excludeExtraneousValues: true
    // });

    // return data;
    return books;
  }

  async findOne(id: number): Promise<BooksListPublicDto> {
    const book = await Books.findOne({
      where: { id },
      relations: ['author', 'bookCategory', 'languages', 'difficulties'],
    });

    const data = plainToInstance(BooksListPublicDto, book, {
      excludeExtraneousValues: true,
    });
    return data;
  }
}
