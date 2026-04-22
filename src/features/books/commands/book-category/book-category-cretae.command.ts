import { Command } from "@nestjs/cqrs";
import { BookCategoryAdminCreateDto } from "../../dtos/admin/bookCategory.create.admin.dto";
import { BookCategory } from "../../entities/bookCategory.entity";

export class BookCategoryCreateCommand extends Command<BookCategory> {
    constructor(public readonly payload: BookCategoryAdminCreateDto) {
        super()
    }
}