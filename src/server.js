import express from "express"
import cors from 'cors'
const PORT = process.env.PORT || 3001
const server = express();

server.use(cors())
server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}` )
})
