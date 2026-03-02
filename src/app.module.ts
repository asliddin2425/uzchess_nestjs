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

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), 
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
  ],
})
export class AppModule {}
