const fetch = require("isomorphic-fetch");

const fetchPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/3")
        const data = await response.json()
        console.log(data.forms)
        return data.forms
    } catch (err) {
        console.log(err)
    }
}

console.log(fetchPokemon())
