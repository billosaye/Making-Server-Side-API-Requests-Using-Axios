// Importing the axios library for making HTTP requests
const axios = require('axios');

// Making a GET request to a public API endpoint
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Logging the response data to the console
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    // Logging any errors that occur during the request to the console
    console.error('Error making the GET request:', error); // Handle errors
  });
