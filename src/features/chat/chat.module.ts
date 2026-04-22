import { Module } from '@nestjs/common';
import { ChatGateway } from './controllers/chat.controller';

@Module({ providers: [ChatGateway] })
export class ChatModule {}
