const express = require('express')
const bodyParser = require('body-parser');
const server = express()
// body parser for parsing request body
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended : true}))

// CRUD => Create Read Update Delete
//          POST  GET   PUT   DELETE

// temprory store 'items' in memory
var itemStore = [];

// Get all items
server.get('/items', (req,res) => {
  res.json(itemStore);
})

// Get the items with specified id
server.get('/items/:id', (req,res) => {
  res.json(itemStore[req.params.id]);
})

// POST new request
server.post('/items', (req,res) => {
  itemStore.push(req.body);
  res.json(req.body);
})

// PUT edited items in-place of item with specified id
server.put('/items/:id', (req,res) => {
  itemStore[req.params.id] = req.body;
  res.json(req.body);
})

// DELETE item with specified id
server.delete('/items/:id' ,(req,res) => {
  itemStore.splice(req.params.id)
  res.json(req.body);
})

// Start the server
server.listen(3000, () => {
  console.log(''Server starting...)
})
