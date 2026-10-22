import { WebSocketServer } from "ws";

const wss  = new WebSocketServer({port : 4000});
let Connections = []
wss.on("connection" , (socket)=>{
    Connections.push(socket);
   socket.on("message" , (message)=>{
         const data = message.toString()
      console.log("DATAAAAAAAAAAAAA=A=A=A=A=A=A=A=," , data)
      Connections.forEach(s => s.send((message.toString())))
   })
})