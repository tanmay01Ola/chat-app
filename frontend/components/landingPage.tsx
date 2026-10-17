import axios from "axios"
import { useNavigate } from "react-router-dom"
async function handleJoinRoom(){
    await axios("htpp://localhost:3003/joinRoom")
}

export function LandingPage(){
    async function handleCreateRoom(){
    await axios("http://localhost:3003/rooms" ,{
        method : "POST"
    })
    navigate('/chatRoom')
}
    const navigate = useNavigate();
    return(
        <div style={{display : "flex",  justifyContent : "center" , gap : 50}}>
              <div className="container" style={{display : "flex" , alignItems : "center"}}>
                        CREATE A ROOM
                   <button onClick = {handleCreateRoom}className="button"  >CREATE ROOM</button>
              </div>
              <div className="container" style={{display : "flex" , alignItems : "center"}}>
                  JOIN A ROOM
                  <button className="button" onClick={handleJoinRoom}>JOIN ROOM</button>
              </div>
        </div>
    )
}