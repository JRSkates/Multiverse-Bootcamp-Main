const express = require('express');
const app = express();

app.use("/myHTML", express.static("public"))


module.exports = app;