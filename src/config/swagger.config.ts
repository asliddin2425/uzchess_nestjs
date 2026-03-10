import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const configureSwagger = (app: INestApplication) => {
  let swaggerConfig = new DocumentBuilder()
    .setTitle('UzChessApi')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  let docs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, docs);
};