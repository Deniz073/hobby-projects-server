declare var require: any

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('send-message', ({ user, message }) => {
    console.log(message);
    io.emit('receive-message', { user, message });
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
})