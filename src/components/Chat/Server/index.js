const express = require('express');

const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "*", // Cualquier servidor pueda conectarse, sino, debes poner el dominio
        methods: ["GET", "POST"]
    }

});

io.on('connection', (socket) => {
    console.log('a user connected with id: ', socket.id);


    socket.on('send_message', (message) => { // Cuando reciba el mensaje, muestralo por consola, y devuelvelo al cliente
        console.log('message: ' + message)
        socket.broadcast.emit('receive_message', message);
    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



server.listen(3001, () => {
    console.log('listening on *:3001');
});
