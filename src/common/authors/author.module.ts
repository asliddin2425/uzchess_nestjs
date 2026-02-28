import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./author.entity";
import { AuthorService } from "./author.service";
import { AuthorController } from "./controllers/author.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Author])],
    controllers: [AuthorController],
    providers: [AuthorService]
})
export class AuthorModule{}