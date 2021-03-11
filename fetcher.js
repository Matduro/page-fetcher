// in your file, run in the terminal the following commands:
// npm init -y
// npm install request

const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const fileName = args[1];

request(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  fs.writeFile(fileName, body, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
  });
});


// output: Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

/* const request = require('request');
request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */