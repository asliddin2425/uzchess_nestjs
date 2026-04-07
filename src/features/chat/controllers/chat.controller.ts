// import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
// import { Server } from "socket.io";

// @WebSocketGateway({
//     cors: {origin: "*"}
// })

// export class ChatGetaway {
//     @WebSocketServer()
//     server: Server;

//     @SubscribeMessage("uzchess-client")
//     handleMessages(@MessageBody() message: string) {
//         this.server.emit("uzchess-server", "Response: ${message}")
//     }
// }

import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
  transports: ['websocket', 'polling'],
})
export class ChatGateway {
  @WebSocketServer()
  server!: Server;

  @SubscribeMessage('uzchess-client')
  handleMessages(@MessageBody() message: string) {
    this.server.emit('uzchess-server', `Response: ${message}`);
    return message;
  }

  
}