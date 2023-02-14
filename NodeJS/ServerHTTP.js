// create localhost node server


// Load the HTTp Module
const http = require('http');

http.createServer((request,responce) => {
//   1. Tell the browser everything is OK {Status: 200}, and data is in plain text.
  responce.writeHead(200, {
    'Content-Type' : 'text/plain'
  });
  
//   2. Write a text to the body of web page
  responce.write('Hello World');
  
//   3. Tell the server that all responce body and header have been sent.
  responce.end();
  
//   4. Tell the server what port to be on responce
}).listen(3000);



// ========== Type on cmd/Terminal ============

// node ServerHTTP.js
