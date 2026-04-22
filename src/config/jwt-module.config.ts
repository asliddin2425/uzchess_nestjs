import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtModuleConfig: JwtModuleOptions = {
  global: true,
  secret: process.env.SEKRET_KEY,
  signOptions: {
    expiresIn: '2h',
  },
};
