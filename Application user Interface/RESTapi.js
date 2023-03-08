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
