const express = require('express');
const app = express();

// Tell express to serve static content in the public directory
// run with: node server.js
app.use(express.static("public"))

// localhost:3000/application
app.get("/application", (req, res) => {
    const hello = "Hello, World!";
    res.send(hello);
})

//localhost:3000/random
app.get("/random", (req, res) => {
    const random = Math.floor(Math.random() * 3)
    res.send(`Random number: ${random}`)
});

// localhost:3000/flipcoin
app.get('/flipcoin', (req, res) => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    res.send(result);
});

module.exports = app;