import React, { useState, useEffect } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [pokeArr, setPokeArr] = useState([])

  const pokeRequest = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=15");
    const data = await res.json();
    // Update state
    setPokeArr(data.results)
  };


  async function handleClick() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=15')
      const data = await response.json();
      console.log(data.results[0].name)
      setPokemonName(data.results[0].name)
  }

  useEffect(() => {
    pokeRequest();
  }, [])
  
  return (
    <div className="poke-div" pokemon-name={pokemonName}>
      <div id="pokemon-name">{pokemonName}</div>
      <button onClick={handleClick}>Show Me the Pokemon!</button>
      <h1>Gotta Catch Em All</h1>
      {pokeArr.map((poke) => (
        <p>{poke.name}</p>
      ))}
    </div>
  );
}

export default App;