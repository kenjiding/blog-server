import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `.env.production` });
} else {
  dotenv.config({ path: '.env.development' });
}
console.log(333, 'process.env.DB_HOST: ', process.env.DB_HOST);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: 'UTC', // 设置时区为 UTC
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: false, // 注意：生产环境中应该设置为 false
};
