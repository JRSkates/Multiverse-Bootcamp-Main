const express = require('express');
const app = express();

// import the routers in
const {fruitRouter, vegRouter} = require('./routes');

// app.use the different routers with different routes

// http://localhost:3000/fruit
app.use('/fruit', fruitRouter);

// http://localhost:3000/veg
app.use('/veg', vegRouter);

module.exports = app;