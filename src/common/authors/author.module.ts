import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { AuthorControllerAdmin } from './controllers/author.admin.controller';
import { AuthorPublicService } from './services/author.public.service';
import { AuthorServiceAdmin } from './services/author.admin.service';
import { AuthorControllerPublic } from './controllers/author.public.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorControllerAdmin, AuthorControllerPublic],
  providers: [AuthorPublicService, AuthorServiceAdmin],
})
export class AuthorModule {}
