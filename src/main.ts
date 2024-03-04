import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';

const PORT = 3008;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(PORT);
}
bootstrap();
