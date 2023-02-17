// route defining  => /setting/:user_id 
// URL example     => /setting/32123234?field=name

const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.get('/setting/:user_id?files=name', (req,res) => {
  // Get Full path
  req.originalUrl
  
//   get user_id params
  req.params.user_id
  
//  get query value of the field
  req.query.field
})

// get body information of the request => use body-parser middleware

// for parsing applicaiton/json
app.use(bodyparser.json())

// for parsing applicaiton/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
