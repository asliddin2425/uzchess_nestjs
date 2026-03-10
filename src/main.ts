import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { configureSwagger } from "./config/swagger.config";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureSwagger(app);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))

  await app.listen(process.env.PORT ?? 3000);
  console.info("server is running http://localhost:3000");
  console.info("swagger http://localhost:3000/docs");
}
bootstrap();


