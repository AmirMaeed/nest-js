import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set EJS as the view engine
  app.setViewEngine('ejs');

  // Set views directory
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));

  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
