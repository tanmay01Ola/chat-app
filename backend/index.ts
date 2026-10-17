import { WebSocketServer } from "ws";

const wss  = new WebSocketServer({port : 4000});
let Connections = []
wss.on("connection" , (socket)=>{
    Connections.push(socket);
   socket.on("message" , (message)=>{
      Connections.forEach(s => s.send(message.toString()))
   })
})