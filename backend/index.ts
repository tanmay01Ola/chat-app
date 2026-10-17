import { db } from "./src/prisma/db";
import  express  from "express";
import cors from "cors"
const app = express();

app.use(express.json());

app.use(cors())
app.listen(3003);

app.post("/rooms" , async(req ,res)=>{
    console.log("rooms rasn")
    const addRoom = await  db.orm.public.Rooms.create({});
    console.log("herer =" , addRoom)
    const token = addRoom.token
    res.json({
        token : token
    })
})