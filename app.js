// Require Express
const express = require('express');

const path = require('path');
// Express server handling requests and responses
const app = express();

// // Make everything inside of views/ available
// app.use(express.static(path.join(__dirname, 'views')));

// Make everything inside of public/ available (default folder)
app.use(express.static(path.join(__dirname, 'public')));

// '/' route:
app.all('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'home.html'));
  // console.log(__dirname); // to see the complete path to the HTML file
});
// '/about' route:
app.all('/about', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'about.html'));
});
// '/works' route:
app.all('/works', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'works.html'));
});
// '/photogallery' route:
app.all('/photogallery', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'photogallery.html'));
});

// start app
app.listen(3000, () => {
  console.log('Yey APP running');
});

// npx kill-port 3000
