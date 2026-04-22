import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { createTestDataSource } from './test-database';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { getDataSourceToken } from '@nestjs/typeorm';

export interface TestApp {
  app: INestApplication;
  dataSource: DataSource;
}

export async function createTestApp(): Promise<TestApp> {
  const dataSource = await createTestDataSource();
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideProvider(getDataSourceToken())
    .useValue(dataSource)
    .compile();

  const app = moduleFixture.createNestApplication();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.init();
  return { app, dataSource };
}
