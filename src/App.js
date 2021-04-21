import './App.css';
import {Exo2, FirstComponent, RandomWord} from "./components/First/FirstComposant";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Recipes from "./view/Recipes/Recipes";
import RecipeDetail from "./view/RecipeDetail/RecipeDetail";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Exo1</Link>
                      </li>
                      <li>
                          <Link to="/exo2">Exo2</Link>
                      </li>
                      <li>
                          <Link to="/exo3">Exo3</Link>
                      </li>
                      <li>
                          <Link to="/recipes">Recipes</Link>
                      </li>
                  </ul>
              </nav>

              <Switch>
                  <Route path="/exo2">
                      <Exo2/>
                  </Route>
                  <Route path="/exo3">
                      <RandomWord words={['Banane', 'Pomme', 'Orange']}/>
                  </Route>
                  <Route path="/recipes">
                      <Recipes/>
                  </Route>

                  <Route path="/recipe/:idRecipe" component={RecipeDetail}/>

                  <Route exact path="/">
                      <FirstComponent message="test message" />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
