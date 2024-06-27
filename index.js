// THIS IS AN EXAMPLE OF CODE USING AXIOS. IT SHOWS THE BENEFITS OF USING AXIOS



const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')  // Making a GET request to a public API endpoint
  .then(response => {
    // Logging the response data to the console
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    // Logging any errors that occur during the request to the console
    console.error('Error making the GET request:', error); // Handle errors
  });
