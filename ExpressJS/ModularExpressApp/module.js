const express = require("express")

module.exports = funciton(options ={}) {
  const router = express.Router();
  
//   GEt controller
  
  const { service } = options;
  
  router.get('/module', (req,res,next) => {
    res.end(service.createGreeting(req.query.name || 'Stranger'));
  })
  
  return router;
};
