const express = require("express")
const app = express()

const PORT = 3000

// set jade/ejs/pug etc template or view engine
app.set('view engine', 'jade'); // ejs, pug engine

// Set the (/src/view) directory where all views engine files.....
app.set('view','src/view');

// create a root routes

app.get("/", (req,res) => {
  
//   render index.jade file into html from /src/views 
  res.render('index');
})


// start the express server
app.listen(PORT, (err) => {
  if(!err){
      console.log("Server is running on port", PORT);
  } else {
        console.log('JSON.stringify(err));
  }
});

