import "./App.css";
import PokemonProfile from "./components/PokemonProfile";
import Pokemon from "./components/Pokemon";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pokemon} />
          <Route path="/Pro" component={PokemonProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
