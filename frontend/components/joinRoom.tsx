import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function JoinRoom(){
    const navigate = useNavigate()
    console.log("JOINROOM")
    const [token , setToken ] = useState("")
   async function joinRoom(){
    await axios("http://localhost:3003/joinRoom" , {
        method : "POST",
        data : {
            token : token
        }
    })
     navigate(`/chatRoom/${token}`)
   }
    return(
        <div>
             <input type="text" placeholder="enter room token"  onChange={(e)=>{
                      setToken(e.target.value)
             }}/>
             <button onClick={joinRoom}>JOIN ROOM</button>
        </div>
    )
}