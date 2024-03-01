import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3090,
  username: 'root',
  password: '123456',
  database: 'blog',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true, // 注意：生产环境中应该设置为 false
};
