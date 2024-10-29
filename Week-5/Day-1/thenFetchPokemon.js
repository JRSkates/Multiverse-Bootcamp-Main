const fetch = require("isomorphic-fetch");

fetch("https://pokeapi.co/api/v2/pokemon/3")
    .then((res) => res.json())
    .then((data) => console.log(data.forms))
    .catch((err) => console.log(err))