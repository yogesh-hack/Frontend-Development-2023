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
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnathorized : false
}

var client = tls.connect(PORT,HOST,options, function() {
//   Check if the Authorised worked
    if(client.authorized){
        console.log("Connection is authorised bya certificate authority.")
    } else{
        console.log("Connection is not authorised..")
    }
//  send some message to check
    client.write("I am client sending you a message..")
});

client.on("data", function(data) {
    console.log('Recieved: %s [it is %d bytes long]', data.toString().replace(/(\n)/gm,""),data.length);
//   Close the connection after recieving the message  
  client.end()
})

client.on("close", function() {
    console.log("Connection is closed..")
});

// shoe error if occur
client.on("error", function(error) {
    console.log(error)
    client.destroy();
})
