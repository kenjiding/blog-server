import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

// import 'reflect-metadata';

const PORT = process.env.PORT || 3008;
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/files', express.static(join(__dirname, '..', '..', 'files')));
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(PORT);
}
bootstrap();
