import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Terms } from "./terms.entity";
import { TermsService } from "./terms.service";
import { TermsController } from "./terms.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Terms])],
    controllers: [TermsController],
    providers: [TermsService]
})
export class TermsModule{}