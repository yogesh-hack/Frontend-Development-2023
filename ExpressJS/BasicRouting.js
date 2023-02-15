const express = require("express")
const app = express()


app.get("/",(res,res,next) => {
  console.log("Home Page route....")
})

app.get("/about",(res,res,next) => {
  console.log("About Page route....")
})

app.get("/login",(res,res,next) => {
  console.log("Login Page route....")
})

// POST method
app.post("/api/auth",(res,res,next) => {
  console.log("making api of data and other post routes ....")
})

// put methods
app.put("/",(res,res,next) => {
  console.log("Home Page route....")
})

// DELETE methods
app.delete("/delete/data",(res,res,next) => {
  console.log("when delete user redirect to delete/data route ....")
})

app.all("/path",(res,res,next) => {})

// routes to all paths
app.use("*",(res,res,next) => {})


// chain your routes for a single path
app.route("/path/subpath")
  .get((req,res,next) => {})
  .post((req,res,next) => {})
  .put((req,res,next) => {})



