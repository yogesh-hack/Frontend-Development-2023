const express = require("express")

// use cores module for enabling cross-origin resource sharing
const cors = require("cors")

const app = express();

// for all routes
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/" , (req,res) => {
  const info = {
      'string_value' : 'Hit on star button',
      'number_value' : 387289723,
  }
  re.json(info);
  
//   ===================== OR =====================
  res.send(JSON.stringify({
     'string_value' : 'Hit on star button',
      'number_value' : 387289723,
  }))
  
//   Add a status code for json responce
  re.status(200).json(info)
})



app.listen(PORT,() => {
  console.log('express listening on PORT : ' + PORT);
})




// ============= OUTPUT ON (https//:localhost:8080) ===========
{
 'string_value' : 'Hit on star button',
 'number_value' : 387289723,
}
