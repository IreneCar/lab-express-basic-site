const express = require('express');
const app = express();

app.use(express.static('public'));


// home route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// work route:
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));


// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000"));