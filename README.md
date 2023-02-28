# Full Frontentend Development Docs

Table of Content

- [Documents object manipulation (DOM)](#Documents-object-manipulation-(DOM))
- [Node JS](#Node-js)
- [Express JS](#Express-js)
- [Application programming interface](#Application-programming-interface)


# Documents object manipulation (DOM)

[github(DOM)](https://github.com/yogesh-hack/Frontend-Development-2023/tree/main/Document-object-model)

# Node js

[github(Node)](https://github.com/yogesh-hack/Frontend-Development-2023/tree/main/NodeJS)

# Express js

[github(Express)](https://github.com/yogesh-hack/Frontend-Development-2023/tree/main/ExpressJS)

# Application programming interface

- API
 
  `API is set of definitions and prtocols that allows technology products and services to communicate via the internet.`
  
- API Call
 
  `API call is simply process of sending a request to your api after setting up the right endpoints.Upon receiving your information, it is processed, and you receive feedback.
  
  Eample : - `By entering your login and password into a website and hitting enter. you made an API call.
  
- API Endpoints
 
  `An endpoint is a end of a communication channel. When API's interact with other systems, Each touchpoint of interaction is considered an endpoint.`
  
  *Intall the express server*
  
  ```shell
  npm install express --save
  npm install cors
  ```
  
   **API call GET request**
   
  ```js
  const express = require('express')
  const cors = require('cors')
  
  const app = express()
  app.use(express.json());
  app.use(cors())
  
  const PORT = 8080;
  
  // create an api json data
  const data = [{
    '_id' : '5buy38t83fgh8';
    'name' : 'yogehs',
    'age' : 21,
    'phone' : 6737667332,
    'email' : 'yogesh0909baghel@gmail.com'
  }]
  
  //api call with get request
  app.get('/api/data', (req,res) => {
    res.send(data)
  })
  
  // api call with get request for unique _id
  app.get('/api/data/:_id', (req,res) =>{
     const item = data.find(c => c._id === req.params._id);
     
     // if data is not found(404)
    if (!item) res.status(404).send('<h2>Ooops... Cant find what you are looking for!</h2>');
    // if found the send
    res.send(item);
  })
  
  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}...`)
  })
  
  
  ```
