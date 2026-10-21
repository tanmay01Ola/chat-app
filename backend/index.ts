import { db } from "./src/prisma/db";
import  express  from "express";
import cors from "cors"
import { joinRoomBody } from "./zod";
import { de } from "zod/locales";
const app = express();

app.use(express.json());

app.use(cors())
app.listen(3003);

app.post("/rooms" , async(req ,res)=>{
    console.log("rooms rasn")
    const addRoom = await  db.orm.public.Rooms.create({
        users : 1
    });
    console.log("herer =" , addRoom)
    const token = addRoom.token
    res.json({
        token : token
    })
})

app.post("/joinRoom" , async(req , res)=>{
    const parsedBody = joinRoomBody.safeParse(req.body);
    if(!parsedBody.success){
        return(

            res.status(401).json({
                message : "BAD_ROOM_TOKEN"
            })
        )
    }
    const {token} = parsedBody.data
     const findRoom = await db.orm.public.Rooms.where({token : token}).first();
     console.log("ROOM =" , findRoom)
     if(!findRoom){
        return(res.status(404).json({
            messsage : "ROOM_NOT_FOUND"
        }))
     }
          let users = findRoom?.users;
          console.log("users =" , users)
  users = users + 1;
     const joinRoom = await db.orm.public.Rooms.where({id : findRoom.id}).update({users : users});
     res.json({
        message : "ROOM JOINED",
        user : joinRoom?.users
     })
})