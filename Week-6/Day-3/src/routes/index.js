const { Router } = require('express');
const fruitRouter = Router();
const vegRouter = Router();

const fruits = ["apple", "orange", "banana"];
const vegetables = ["carrot", "potato", "cabbage"];

fruitRouter.get('/', (req, res) => {
    res.json({fruits})
})

vegRouter.get('/', (req, res) => {
    res.json({vegetables})
});

module.exports = { 
    fruitRouter, 
    vegRouter 
};