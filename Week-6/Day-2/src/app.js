const express = require('express');
const app = express();
const fruits = ["apple", "orange", "banana"]

app.use(express.json());

//CREAT - Post
app.post('/', (req, res) => {
    fruits.push(req.body.fruit);
    res.json({fruits});
})

//READ - Get
app.get('/', (req, res) => {
    res.json({fruits})
})

//UPDATE - Push/Patch
app.put('/', (req, res) => {
    fruits[0] = req.body.fruit;
    res.json({fruits});
});


//DELETE - Delete
app.delete('/', (req, res) => {
    fruits.pop();
    res.json({fruits});
});

module.exports = app;