const express = require("express");
const router = express.Router();
const users = [
  { name: "Rick", age: 72 },
  { name: "Morty", age: 14 },
  { name: "Jerry", age: 42 },
];
const { check, validationResult } = require('express-validator')


// Define middleware and routes here
router.use(express.json());
router.use(express.urlencoded());

// GET / route to return all users
router.get('/', (req, res) => {
    res.json(users);
});

// POST / route to add a new user to the end of the array
router.post('/', [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() });
    } else {
        const newUser = req.body; 
        users.push(newUser); 
        res.json(users); 
    }
});

// DO NOT EDIT CODE BELOW
module.exports = router;