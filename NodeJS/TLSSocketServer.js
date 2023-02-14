'use strict';

// Load TLS socket module
var tls = require('tls')

// Load File System module
var fs = require('fs')

// create PORT and HOST on server
const PORT = 3000
const HOST = '127.0.0.1'

var options = {
    key : fs.readFileSync('Private-key.pem'),
    cert: fs.readFileSync('public-cert.pem')
}

// creating the server
var server = tls.createServer(options, function(socket){
  
    //  send the messages
    socket.write("I am server sending you a message..")

//     Print the data that we recieved
    socket.on('data', function(data){
        console.log('Recieved: %s [it is %d bytes long]', data.toString().replace(/(\n)/gm,""),data.length);
    });
//  When transmission is over...
    socket.on('end',function() {
        console.log('EOT (end of transmition...)')
    });
});

// Start listening on PORT and Address
server.listen(PORT,HOST, function(){
  console.log('Listining at %s, on PORT %s', HOST,PORT);
})

// When Any error occur , show it..
server.on('error', function(error) {
    console.log(error)
    server.destroy();
});
