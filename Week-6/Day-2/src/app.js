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

// GET Parameter ID Value
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(id)
})

//UPDATE - Push/Patch
app.put('/', (req, res) => {
    fruits[0] = req.body.fruit;
    res.json({fruits});
});


//DELETE - Delete
// Route parameter of id to delete specific element
app.delete('/:id', (req, res) => {
    const parameter = req.params.id
    fruits.splice(parameter, 1);
    res.json({fruits});
});

module.exports = app;