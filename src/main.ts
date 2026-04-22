// import { NestFactory } from "@nestjs/core";
// import { AppModule } from "./app.module";
// import { ValidationPipe } from "@nestjs/common";
// import { configureSwagger } from "./config/swagger.config";
// import { NestExpressApplication } from "@nestjs/platform-express";
// import { join } from "path";

// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);

//   configureSwagger(app);

//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       forbidNonWhitelisted: true,
//       transform: true,
//     }),
//   );

//   app.enableCors({
//     origin: "http://localhost:3001",
//     credentials: true,
//   });

//   // uploads papkani public qilish
//   app.useStaticAssets(join(process.cwd(), "uploads"), {
//     prefix: "/uploads/",
//   });

//   await app.listen(3000);

//   console.log("server http://localhost:3000");
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { configureSwagger } from './config/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const start = Date.now(); // ⏱️ Timer boshlandi

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  configureSwagger(app);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });

  await app.listen(3000);

  const elapsed = Date.now() - start;
  console.log(`server http://localhost:3000`);
  console.log(`Server ${elapsed}ms da ishga tushdi`);
}
bootstrap();
