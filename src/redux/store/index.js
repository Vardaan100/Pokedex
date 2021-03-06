import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import PokeReducer from "../reducer/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  PokeReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
