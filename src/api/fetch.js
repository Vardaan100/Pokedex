import axios from "axios";
//Group listing api
export const getListOfPokemons = () => {
  let url = "";
  url = `https://pokeapi.co/api/v2/pokemon?limit=100`;
  return axios.get(url);
};

export const getPokemonProfile = (Pokemon_url) => {
  let url = "";
  url = Pokemon_url;
  return axios.get(url);
};
