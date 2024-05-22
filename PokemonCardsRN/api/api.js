const pokemons = fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => err);

export default pokemons;
