import { useEffect, useState } from "react"

export function ChatRoom(){
        const [message , setMessage] = useState("");
        const [socket , setSocket] = useState<WebSocket>()
        const [incomingMessage , setIncomingMessage] = useState("")
    function sendMessage(){
         socket?.send(message)
    }
    useEffect(()=>{
          const ws = new WebSocket("ws://localhost:4000")
          setSocket(ws)
             ws.onmessage = (message)=>{
                 const data = (message.data)
                 setIncomingMessage(message.data)
             }
             
    }, []) 
    return(
        <div> 
               <input type="text" placeholder="enter message" onChange={(e)=>
                setMessage(e.target.value)
               } />
               <button onClick={sendMessage}>send message</button>
               {incomingMessage}
        </div>

    )
}