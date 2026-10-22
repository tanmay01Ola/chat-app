import { useEffect, useState } from "react"

export function ChatRoom(){
        const [message , setMessage] = useState("");
        const [socket , setSocket] = useState<WebSocket>()
        const [incomingMessage , setIncomingMessage] = useState<any[]>([])
    function sendMessage(){
         socket?.send(JSON.stringify(message))
    }
    useEffect(()=>{
          const ws = new WebSocket("ws://localhost:4000")
          setSocket(ws)
             ws.onmessage = (message)=>{
                 const data  = JSON.parse(message.data)
                 console.log('DATAAA= ', data)
                 setIncomingMessage((prev)=> [...prev , data])
             }      
    }, [incomingMessage]) 
    console.log("INCOMING MESSAGE -----------" , incomingMessage)
    return(
        <div> 
               <input type="text" placeholder="enter message" onChange={(e)=>
                setMessage(e.target.value)
               } />
               <button onClick={sendMessage}>send message</button>
              {incomingMessage.map((m)=><div> {m}</div>)}
            </div>

    )
}