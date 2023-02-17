const express = require('express')
const app = express()


// GET   /names/john

app.get('/names/:name', (req,res,next) => {
  if(req.params.name == 'jhon'){
    return res.send('valid name....')
  }else{
    next(new Error('Not Allowed to enter... invalid names..'))
  }
});


// error handler
app.use((err,req,res,next) => {
  console.log(err.stack)
  return res.status(500).send('Internal server occured..')
})

app.listen(3000)
