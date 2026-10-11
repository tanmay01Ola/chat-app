import { useEffect } from "react"

export function LandingPage(){
    useEffect(()=>{
        const ws = new WebSocket("ws://localhost:4000");
    })
    return(
        <div style={{
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            gap : 100,
            height : 1000
        }}>
            <div className="border">
                 <h1>CREATE NEW ROOM</h1>
                <button style={{borderRadius : 30 , height : 30 , width : 150}} >CREATE ROOM</button>
            </div>
            <div className="border">
                   <h1>JOIN ROOM</h1>
                   <button style={{borderRadius : 20 , width : 150}}>JOIN ROOM</button>
            </div>

        </div>
    )
}