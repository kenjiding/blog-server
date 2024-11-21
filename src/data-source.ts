// src/data-source.ts

import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Article } from '@/modules/article/article.entity';
import { Users } from '@/modules/user/user.entity';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const AppDataSource = new DataSource({
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
  // migrations: ['src/migrations/*.ts'], // 指定迁移文件的路径
  migrationsTableName: 'migration_logs_table',
});
