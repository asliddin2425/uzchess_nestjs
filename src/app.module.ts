import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm-config';
import { BooksModule } from './features/books/book.module';
import { CourseModule } from './features/courses/course.module';
import { NewsModule } from './features/news/news.module';

import { AuthorModule } from './common/authors/author.module';
import { CountryModule } from './common/countries/country.module';
import { DifficultyModule } from './common/difficulties/difficulties.module';
import { LanguageModule } from './common/language/language.module';
import { MatchesModule } from './features/matches/matches.module';
import { ReportModule } from './features/reports/report.module';
import { TermsModule } from './common/terms/terms.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './core/guards/auth.guard';
import { RolesGuard } from './core/guards/roles.guard';
import { ChatModule } from './features/chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/env-config';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from './config/jwt-module.config';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CqrsModule.forRoot(),
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRoot(typeormConfig),
    JwtModule.register(jwtModuleConfig),
    BooksModule,
    CourseModule,
    NewsModule,
    AuthModule,
    AuthorModule,
    CountryModule,
    DifficultyModule,
    LanguageModule,
    MatchesModule,
    ReportModule,
    TermsModule,

    ChatModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
