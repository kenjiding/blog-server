import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllExceptionsFilter } from './filters/exceptions.filter';
import { DataInterceptor } from './interceptors/data.interceptor';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserController } from './modules/user/user.controller';
import { FileModule } from './modules/file/file.module';
import { AppDataSource } from './data-source'; // 引入 DataSource
@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    ArticleModule,
    AuthModule,
    FileModule,
  ],
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
    AppService,
  ],
})
export class AppModule {}
