import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm-config';
import { BooksModule } from './features/books/book.module';
import { CourseModule } from './features/courses/course.module';
import { NewsModule } from './features/news/news.module';
import { UserModule } from './auth/user/user.module';
import { AuthorModule } from './common/authors/author.module';
import { CountryModule } from './common/countries/country.module';
import { DifficultyModule } from './common/difficulties/difficulties.module';
import { LanguageModule } from './common/language/language.module';
import { MatchesModule } from './common/matches/matches.module';
import { PlayerModule } from './common/players/players.module';
import { ReportModule } from './common/reports/report.module';
import { TermsModule } from './common/terms/terms.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), 
    BooksModule,
    CourseModule,
    NewsModule,
    UserModule,
    AuthorModule,
    CountryModule,
    DifficultyModule,
    LanguageModule,
    MatchesModule,
    PlayerModule,
    ReportModule, 
    TermsModule,
  ],
})
export class AppModule {}
