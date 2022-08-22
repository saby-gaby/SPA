import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Beauty from "./components/Beauty";
import Health from "./components/Health";
import Wellness from "./components/Wellness";
import Home from "./components/Home";
import Page404 from "./components/404";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/beauty">Beauty</NavLink>
              </li>
              <li>
                <NavLink to="/health">Health</NavLink>
              </li>
              <li>
                <NavLink to="/wellness">Wellness</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path={["/","/home"]} exact component={Home} />
            <Route path="/beauty" exact component={Beauty} />
            <Route path="/health" exact component={Health} />
            <Route path="/wellness" exact component={Wellness} />
            <Route path="*" component={Page404}>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
