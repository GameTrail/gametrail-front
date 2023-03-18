const express = require('express');

const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }

});

io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('send_message', (msg) => {
        console.log('message: ' + msg)
        socket.emit('receive_message', msg);
    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



server.listen(3001, () => {
    console.log('listening on *:3001');
});
