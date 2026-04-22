import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Languages } from './language.entity';
import { LanguageControllerAdmin } from './controllers/language.admin.controller';
import { LanguageServiceAdmin } from './services/language.admin.service';
import { LanguageControllerPublic } from './controllers/language.pubic.controller';
import { LanguagePublicService } from './services/language.public.service';

@Module({
  imports: [TypeOrmModule.forFeature([Languages])],
  controllers: [LanguageControllerAdmin, LanguageControllerPublic],
  providers: [LanguageServiceAdmin, LanguagePublicService],
})
export class LanguageModule {}
