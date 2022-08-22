import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/health" element={<Health />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="*" element={<Page404 />}>
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
