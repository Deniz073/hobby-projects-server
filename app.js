const express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');

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

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3001, () => {
  console.log('listening on *:3001');
})

module.exports = app;
