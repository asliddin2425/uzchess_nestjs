import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: true,
  // logging: true,
  entities: ['dist/**/*.entity.js'], 
};