import { POKEMON_LIST, POKEMON_PRO } from "../constants/index";
import { getListOfPokemons, getPokemonProfile } from "../../api/fetch";

export const GetPokemonList = (action) => {
  return (dispatch) => {
    getListOfPokemons(action)
      .then((data) => data.data)
      .then((response) => {
        if (response) {
          dispatch({
            type: POKEMON_LIST,
            payload: response,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetPokemonProfile = (action) => {
  return (dispatch) => {
    getPokemonProfile(action.Pokemon_url)
      .then((data) => data.data)
      .then((response) => {
        if (response) {
          dispatch({
            type: POKEMON_PRO,
            payload: response,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
