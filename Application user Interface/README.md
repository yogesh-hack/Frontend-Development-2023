# REST API

A REST API is an architectural style for building web services that can be consumed by a wide range of clients, including web browsers, mobile devices, and IoT devices. Node.js is a popular JavaScript runtime that allows developers to build scalable and high-performance web applications.

### To build a REST API using Node.js, you can follow these general steps:

- Install Node.js: First, make sure you have Node.js installed on your machine. You can download and install Node.js from the official website (https://nodejs.org/en/download/).

- Create a new project: Once Node.js is installed, you can create a new project folder and initialize it with npm (the Node.js package manager) by running the following commands in your terminal:

```bash
mkdir myproject
cd myproject
npm init
```
- Install dependencies: Next, you'll need to install some dependencies to help you build your REST API. Some popular packages include Express.js (a web framework for Node.js), Body-parser (a middleware for parsing HTTP request bodies), and Mongoose (an object modeling library for MongoDB). You can install these packages by running the following command in your terminal:

```bash
npm install express body-parser mongoose --save
```

- Create endpoints: Once you have your dependencies installed, you can start building your API endpoints. These are the URLs that your clients will use to send requests to your server. Here's an example of how you can create a simple "Hello World" endpoint using Express.js:

```js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
*This code creates a new Express.js app, defines a GET endpoint at /hello, and sends the response "Hello World!" to the client when the endpoint is called. The app.listen() function starts the server and listens for incoming requests on port 3000.*

- Connect to a database: If your REST API needs to store data, you'll need to connect to a database. MongoDB is a popular NoSQL database that is commonly used with Node.js. You can connect to a MongoDB database using the Mongoose library. Here's an example of how you can connect to a MongoDB database using Mongoose:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

```
1 Create routes: Define the routes for your API endpoints. This involves defining the HTTP methods (GET, POST, PUT, DELETE, etc.), the URLs, and the associated handlers for each endpoint.

2 Implement controllers: Controllers are the code that executes the logic behind each endpoint. Controllers receive requests from the routes, execute business logic (such as reading from or writing to a database), and return responses.

3 Define models: Models represent the data structures that your API will use. These models define the data that your API will receive or return.

4 Configure middleware: Middleware is code that runs between the request and response in your API. Middleware can perform tasks such as authentication, logging, and error handling.

5 Test your API: Use a tool such as Postman to test your API endpoints and ensure they are working as expected.

Here is a simple example of how to create a basic REST API using Node.js and Express:

```js
const express = require('express');
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define a route for a user endpoint
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // Retrieve user data from a database or other data source
  const userData = {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  res.send(userData);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## example of a Node.js REST API with all the HTTP methods:
```js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define a route for a user endpoint
app.route('/users/:userId')
  // GET method for retrieving a user
  .get((req, res) => {
    const userId = req.params.userId;
    // Retrieve user data from a database or other data source
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    res.send(userData);
  })
  // PUT method for updating a user
  .put((req, res) => {
    const userId = req.params.userId;
    // Update user data in a database or other data source
    const userData = req.body;
    userData.id = userId;
    res.send(userData);
  })
  // DELETE method for deleting a user
  .delete((req, res) => {
    const userId = req.params.userId;
    // Delete user data from a database or other data source
    res.send(`User ${userId} deleted.`);
  });

// Define a route for creating a new user
app.post('/users', (req, res) => {
  const userData = req.body;
  // Insert new user data into a database or other data source
  userData.id = '123'; // Example ID
  res.status(201).send(userData);
});

// Define a route for retrieving a list of users
app.get('/users', (req, res) => {
  // Retrieve a list of users from a database or other data source
  const userList = [
    {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: '456',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
  ];
  res.send(userList);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

