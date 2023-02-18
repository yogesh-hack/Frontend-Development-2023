const express = require('express')
const app = express()

// For parsing the body ion POST request
const bodyparser = require('bosy-parser');

{
  "user" : {
    "id" : 3,
    "name" : "New User",
    "age" : 34,
    "email" : "new232@gmail.com"
  }
}

app.post('/api/users', (req,res) => {
  cosnt user = req.body.user;
  users.push(user);
  
  return res.send('User has add succesfully...');
})

app.listen('8080', () => {
  console.log('Server listening on http//:localhost:8080');
})

