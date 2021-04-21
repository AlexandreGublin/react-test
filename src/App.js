import logo from './logo.svg';
import './App.css';
import {Exo2, FirstComponent, RandomWord} from "./components/first-composant";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                  </ul>
              </nav>

              <Switch>
                  <Route path="/exo2">
                      <Exo2/>
                  </Route>
                  <Route path="/exo3">
                      <RandomWord words={['Banane', 'Pomme', 'Orange']}/>
                  </Route>
                  <Route path="/">
                      <FirstComponent message="test message" />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
