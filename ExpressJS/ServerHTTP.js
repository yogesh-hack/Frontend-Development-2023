// create express localhost server

// load the express module
const express = require('express');

// create express applicaion using express module
const server = express();

// define port number
const PORT = 3000;

// Routes HTTP get request to path ('/') with callback function
server.get('/', (request,responce) => {
  responce.send('Hello World!');
});

// make the server listen on port 3000
server.listen(PORT, () => {
  console.log('Server listening on https://localhost:' + PORT);
})


// ======== Type on CMD/Terminal =======

// node ServerHTTP.js
