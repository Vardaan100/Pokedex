export default function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        console.log(pokemon);
        return pokemon;
      });
    });
}

export function fetchPokemonData(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      console.log(pokeData);
    });
}
