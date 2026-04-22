import 'dotenv/config';
import { ConfigModuleOptions } from '@nestjs/config';
import Joi from 'joi';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema: Joi.object({
    SECRET_KEY: Joi.string().required(),
    BASE_URL: Joi.string().required(),
    DB_URL: Joi.string().required(),
    DEFAULT_DB_URL: Joi.string().required(),
    TEST_DB_URL: Joi.string().required(),
    PORT: Joi.number().required(),
    JWT_EXPIRE: Joi.string().required(),
    OTP_EXPIRE: Joi.number().required(),
    OTP_RESEND: Joi.number().required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
    DEFAULT_SIZE: Joi.number().required(),
    DEFAULT_PAGE: Joi.number().required(),
  }),
};
