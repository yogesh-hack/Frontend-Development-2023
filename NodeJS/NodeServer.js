// Node js Server without framework

const http = require('http');
const fs = require('fs');
const path = require('path');

https.createServer((request,responce) => {
  console.log('request', request.url)
  
  const filepath = '.' + request.url;
  if(filepath == './'){
    filepath = './index.html';
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = 'text/html'
  const mimetype = {
    'html' : 'text/html',
    'js' : 'text/javascript',
    'css' : 'text/css',
    'json' : 'applicaiton/json',
    'png' : 'image/png',
  }
  
  contentType = mimetype[extname]
  
  fs.readFile(filePath, (err,content) = {
    if(err){
      if(err.code == 'ENOENT'){
        fs.readFile('./404.html', () => {
          responce.writeHead(200, { 'Content-Type' : contentType})
          responce.end(content, 'utf-8');
        })
      }
      else{
        responce.writeHead(500);
        responce.end('Sorry.. you can't access..')
        responce.end()
      }
    }
    else{
   responce.writeHead(200, { 'Content-Type' : contentType})
   responce.end(content, 'utf-8');
  }
  })
}).listen(8080);

console.log('server is running on http//:localhost:8080')
