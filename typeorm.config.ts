import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Article } from '@/modules/article/article.entity';
import { Users } from '@/modules/user/user.entity';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: 'UTC', // 设置时区为 UTC
  // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  entities: [Article, Users],
  synchronize: false, // 注意：生产环境中应该设置为 false
};
