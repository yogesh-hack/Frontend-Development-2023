const express = require('express')
// import { express } from 'express'

const app = express();

const user = [
  {
    id : 1,
    name : "jhon walker",
    age : 23,
    email : 'jhon123@hotmail.com',
  },
  {
    id : 2,
    name : "yogesh",
    age : 21,
    email : 'yogesh1653@hotmail.com',
  },
]

// GET  => /api/users route
app.gte('/api/users', (req,res) => {
  return res.json(users);
})

// listen express server
app.listen('8080',() => {
  console.log('Server listening on http//:localhost:8080');
})
