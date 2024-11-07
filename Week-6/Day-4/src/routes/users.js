const express = require("express");
const router = express.Router();
const users = [
  { name: "Rick", age: 72 },
  { name: "Morty", age: 14 },
  { name: "Jerry", age: 42 },
];

// Define middleware and routes here
router.use(express.json());
router.use(express.urlencoded());

// GET / route to return all users
router.get('/', (req, res) => {
    res.json(users);
});

// POST / route to add a new user to the end of the array
router.post('/', (req, res) => {
    const newUser = req.body; 
    users.push(newUser); 
    res.json(users); 
});

// DO NOT EDIT CODE BELOW
module.exports = router;