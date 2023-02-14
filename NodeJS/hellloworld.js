'use strict';

var username = process.argv[2];

if(!username) {
  var appName = process.argv[1].spilt(require('path').sep).pop();
  console.error('Missing arguments ! Example : %S YOUR_NAME', appName);
  
  process.exit(1);
}

console.log('Hello %s!', username);

