const express = require("express")
const app = express();

app.get("/home", (req,res) => {
  console.log("Accessed the home page");
})

// catch 404 error and forward to error handler

app.use((req,res,next) => {
  const err = new Error('Not Found...');
  err.satus = 404;
  
//   pass error to the next matching route
  next(err);
});

// handle another error

app.use((err,req,res,next) => {
  res.status(err.status || 500);
  
  res.render('error', {
    message : err.message,
    error : err
  });
});

