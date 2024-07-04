import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { setupSwagger } from "@common/swagger/swagger.config";
import { AppModule } from "./app.module";

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT || 3000);
}

bootstrap();
