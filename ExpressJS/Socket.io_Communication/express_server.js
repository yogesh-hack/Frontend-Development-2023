// npm install express
// npm install socket.io

const express = require("express");
const app = express();

const server = app.listen(3000,console.log('socket.io'))
const io = require('socket.io')(server)


io.on('connection', (socket) => {
// client connected
  socket.on('message-from-client-to-server', (msg) => {
    console.log(msg);
  })
  socket.emit('message-from-server-to-client', 'Hello World!')
})
