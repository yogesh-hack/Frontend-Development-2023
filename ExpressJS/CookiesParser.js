const express = require('express')
const app = express()

// module for parsing cookies
const cookieparser = require('cookie-parser')

app.use(cookieparser())

// Set the cookies
app.get('/setcookie' ,(req,res) => {
//   setting cooies
  res.cookies('username','jhon', {maxage : 30, httpOnly : true})
  return res.send('Cookies set succesfully...')
})

app.get('/getcookie', (req,res,next) => {
  const username = req.cookies['username']
  if(username) {
    return res.send(username);
  }
  
  return res.send('NO cookie found...')
})

app.listen(3000)
