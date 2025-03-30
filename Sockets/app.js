const express = require('express')
const { createServer } = require("http");
const path = require('path');
const { Server } = require("socket.io");
const app = express()

const PORT =4444

const httpServer = createServer(app);
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
const io = new Server(httpServer, { /* options */ });

let userMap ={}

io.on("connection", (socket) => {
  console.log(socket.id)
  
  socket.on('newuser',({socketId,name})=>{
    userMap[socketId]=name

    socket.emit('useradded',{
        msg:'user added',
        name:userMap[socketId]
    })
  })

  socket.on('newmessage',({message,socketId})=>{
    io.emit('messagereceived',{
        message:message,
        socketId:socket.id,
        name:userMap[socket.id]
    })
  })
});

httpServer.listen(PORT)