import { Injectable, NotFoundException } from "@nestjs/common";
import { BookCategoryAdminCreateDto } from "../../dtos/admin/bookCategory.create.admin.dto";
import { BookCategory } from "../../entities/bookCategory.entity";

@Injectable()
export class BookCategoryServiceAdmin {
    async create(payload: BookCategoryAdminCreateDto): Promise<BookCategory> {
        const newBookCategory = BookCategory.create({ ...(payload as Partial<BookCategory>) });
        const savedBookCategory = await BookCategory.save(newBookCategory);
        return savedBookCategory as BookCategory;
    }

    async delete(id: number): Promise<undefined> {
        const author = await BookCategory.findOneBy({id});
        if(!author) {
            throw new NotFoundException("Not Found")
        }
        await BookCategory.remove(author)
    } 
}