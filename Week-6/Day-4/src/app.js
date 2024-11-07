const express = require("express");
const app = express();

// Write your code here
const router = require('./routes/users')

app.use('/users', router)
module.exports = app;