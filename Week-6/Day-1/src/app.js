const express = require('express');
const app = express();

// run with: node server.js
app.use("/myHTML", express.static("public"))

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

module.exports = app;