import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export function LandingPage(){
    const {roomId} = useParams()
    console.log("TOKEN =" , roomId)
        const navigate = useNavigate();
    async function handleCreateRoom(){
    await axios("http://localhost:3003/rooms" ,{
        method : "POST"
    })
    navigate(`/chatRoom/${roomId}`)
}
    return(
        <div style={{display : "flex",  justifyContent : "center" , gap : 50}}>
              <div className="container" style={{display : "flex" , alignItems : "center"}}>
                        CREATE A ROOM
                   <button onClick = {handleCreateRoom}className="button"  >CREATE ROOM</button>
              </div>
              <div className="container" style={{display : "flex" , alignItems : "center"}}>
                  JOIN A ROOM
                  <button className="button" onClick={()=>{
                    navigate("/joinRoom")
                  }}>JOIN ROOM</button>
              </div>
        </div>
    )
}