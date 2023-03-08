const userData = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
};

fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response data to the console
    // Do something with the data, such as rendering it to the DOM
  })
  .catch(error => {
    console.error(error); // Log any errors to the console
  });
