import { POKEMON_PRO, POKEMON_LIST, POKEMON_URL } from "../constants";
import { cloneDeep } from "lodash";

const initialState = { pokemon_list: [], pokemon_pro: {}, pokemon_url: "" };

export default function PokeReducer(state = initialState, actions) {
  let newState = cloneDeep(state);
  switch (actions.type) {
    case POKEMON_LIST: {
      newState["pokemon_list"] = actions.payload;
      return newState;
    }

    case POKEMON_PRO: {
      newState["pokemon_pro"] = actions.payload;
      return newState;
    }

    case POKEMON_URL: {
      newState["pokemon_url"] = actions.payload;
      return newState;
    }
    default: {
      return newState;
    }
  }
}
