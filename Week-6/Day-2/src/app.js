const express = require('express');
const app = express();
const fruits = ["apple", "orange", "banana"]

app.get('/rest', (req, res) => {
    res.json({fruits})
})


module.exports = app;