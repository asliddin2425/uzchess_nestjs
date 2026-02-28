import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Languages } from "./language.entity";
import { Languageservice } from "./language.service";
import { LanguageController } from "./language.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Languages])],
    controllers: [LanguageController],
    providers: [Languageservice]
})
export class LanguageModule{}