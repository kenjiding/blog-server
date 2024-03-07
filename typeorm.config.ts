import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { Article } from './src/modules/article/article.entity';
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `.env.production` });
} else {
  dotenv.config({ path: '.env.development' });
}
console.log(333, 'process.env.DB_HOST: ', process.env.DB_HOST);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '54.165.65.205',
  port: 3090,
  username: 'root',
  password: '123456',
  database: 'blog',
  timezone: 'UTC', // 设置时区为 UTC
  // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  entities: [Article],
  synchronize: false, // 注意：生产环境中应该设置为 false
};
