const fetch = require("isomorphic-fetch");

async function getCats() {
    console.log('fetching api')
    const response = await fetch("https://meowfacts.herokuapp.com/?count=1");
    console.log('parsing to json')
    const data = await response.json();
    console.log(data)
    return data;
}

getCats()