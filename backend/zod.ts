import z from "zod";


export const joinRoomBody = z.object({
    token : z.string()
})