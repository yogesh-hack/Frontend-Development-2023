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
 
  `API call is simply process of sending a request to your api after setting up the right endpoints.Upon receiving your information, it is processed, and you receive feedback.`
  
  Eample : - `By entering your login and password into a website and hitting enter. you made an API call.`
  
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
  
  **Paginaiton REST API**
  
```js
 const express = require('express');
 const router = express.Router();

 const product = [
   {
     "southIndian": [
       { "_id": "632dfa7d1a1a42f7f2290c5e" },
       { "_id": "532dfa7d1a1a42f7f2290c5f" },
       { "_id": "432dfa7d1a1a42f7f2290c5g" },
       { "_id": "332dfa7d1a1a42f7f2290c5h" },
       { "_id": "232dfa7d1a1a42f7f2290c5i" },
       { "_id": "132dfa7d1a1a42f7f2290c5j" },
       { "_id": "032dfa7d1a1a42f7f2290c5k" },
       { "_id": "932dfa7d1a1a42f7f2290c5l" },
       { "_id": "832dfa7d1a1a42f7f2290c5m" },
       { "_id": "732dfa7d1a1a42f7f2290c5n" }
     ]
   },
   {
     "indianfood": [
       { "_id": "wjgftr87wr82rt2737r2t7r" },
       { "_id": "xjgftr87wr82rt2737r2t7s" },
       { "_id": "yjgftr87wr82rt2737r2t7t" },
       { "_id": "zjgftr87wr82rt2737r2t7u" },
       { "_id": "ajgftr87wr82rt2737r2t7v" },
       { "_id": "bjgftr87wr82rt2737r2t7w" },
       { "_id": "cjgftr87wr82rt2737r2t7x" },
       { "_id": "djgftr87wr82rt2737r2t7y" },
       { "_id": "ejgftr87wr82rt2737r2t7z" },
       { "_id": "fjgftr87wr82rt2737r2t7a" }
     ]
   }
 ];

 router.get('/products', (req, res) => {
   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit) || 5;
   const startIndex = (page - 1) * limit;
   const endIndex = page * limit;

   const results = {};

   for (let i = 0; i < product.length; i++) {
     const category = Object.keys(product[i])[0];
     const items = product[i][category];

     const paginatedItems = items.slice(startIndex, endIndex);

     results[category] = paginatedItems;

     if (endIndex < items.length) {
       results.next = {
         page: page + 1,
         limit: limit
       };
     }

     if (startIndex > 0) {
       results.previous = {
         page: page - 1,
         limit: limit
       };
     }
   }

   res.json(results);
 });
```
