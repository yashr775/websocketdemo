// import express from 'express';
// import http from 'http'
import {Server} from "socket.io";
import { createServer } from "http";

const httpServer = createServer();

// const app =express();
// const server = http.createServer(app);

// var cors = require('cors');

// const PORT = 5000;

// app.use(cors());

// app.use(express.json());

// app.use(express.static('/public'))

const io = new Server(httpServer,{
    cors:{origin:'*'}
    
});

io.on("connection",(socket)=>{
    socket.emit("welcome","welcomme to the channel");

    socket.on("msg",(data)=>{
        console.log("message from client",data);
    })
})

httpServer.listen(3001,()=>{
    console.log(`Listening on port 3001`)
})

// app.listen(PORT ,()=>{
//     console.log(`App is listening on ${PORT}`)
// })