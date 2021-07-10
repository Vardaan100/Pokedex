import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PokemonProfile.css";
import { GetPokemonProfile } from "../redux/actions";

export default function PokemonProfile(props) {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.pokemon_url);
  const pokemonProfile = useSelector((state) => state.pokemon_pro);

  useEffect(() => {
    dispatch(GetPokemonProfile({ Pokemon_url: url }));
  }, []);
  return pokemonProfile ? (
    <div className="pokemon-profile">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonProfile.id}.png`}
      />
      <div className="poke-type-profile">
        <h2 id="header">Name: {pokemonProfile.name}</h2>
        <h2 id="header">Types:</h2>
        <ul id="header">
          {pokemonProfile.types &&
            pokemonProfile.types.map((type) => <li> {type.type.name}</li>)}
        </ul>
      </div>
    </div>
  ) : null;
}
