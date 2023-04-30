const express = require('express');
<<<<<<< Updated upstream:index.ts
import http from 'http';
const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";
=======
const http = require('http');
var app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
>>>>>>> Stashed changes:app.js

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

module.exports = app;
