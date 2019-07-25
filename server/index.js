const express = require("express");
const path = require("path");
const http = require('http')
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, "../public");

const app = express();
app.use(express.json());
app.use(express.static(publicPath));
const server = http.createServer(app)
const io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket)=>{
    console.log('New User Joined Chat');

    socket.emit('newMessage', {
        name: "olamiji", message: "Adeolu is a goat"
    })

    socket.on('createMessage', (newMessage)=>{
        console.log('created Message', newMessage)
    })

    socket.on('disconnect', ()=>{
        console.log('User left chat')
    }) 
})

server.listen(port, () => console.log(`Server started on port ${port}`));
