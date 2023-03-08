fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response data to the console
    // Do something with the data, such as rendering it to the DOM
  })
  .catch(error => {
    console.error(error); // Log any errors to the console
  });
