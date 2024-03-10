import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { AllExceptionsFilter } from './filters/exceptions.filter';
import { DataInterceptor } from './interceptors/data.interceptor';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserController } from './modules/user/user.controller';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArticleModule, AuthModule],
  controllers: [AppController, AuthController, UserController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    AppService
  ],
})
export class AppModule {}
