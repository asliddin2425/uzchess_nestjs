import { Injectable, NotFoundException } from "@nestjs/common";
import { BooksCreateAdminDto } from "../../dtos/admin/books.create.admin.dto";
import { Books } from "../../entities/books.entity";

@Injectable()
export class BooksServiceAdmin {
    async create(payload: BooksCreateAdminDto, image?: Express.Multer.File): Promise<Books> {
        const newBooks = Books.create({...payload, image: image ? image.path.replace('./uploads/', '/uploads/') : undefined});
        await Books.save(newBooks)
        return newBooks;
    }

    async delete(id: number): Promise<undefined> {
        const books = await Books.findOneBy({id})
        if(!books) {
            throw new NotFoundException("Not Found")
        } 
        await Books.remove(books)
    }
}