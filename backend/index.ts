import { db } from "./src/prisma/db";
import  express  from "express";

const app = express();

app.use(express.json());


app.listen(3003);

app.post("/rooms" , async(req ,res)=>{
    const addRoom = await  db.orm.public.Rooms.create({});
    const token = addRoom.token
    res.json({
        token : token
    })
})