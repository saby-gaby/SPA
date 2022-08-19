import "./App.css";
import { Link, NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const About = () => (
  <>
    <h1>About</h1>
    <p>Hier finden Sie eine Liste meiner aktuellen Projekte.</p>
    <Link to="/about/projects">Projects</Link>
  </>
)
const Projects = (props) => {
  // console.log(props);
  return (
  <>
    <div className="projects">
      <h1>Projects</h1>
      <Link to="/about/projects/doggy">Doggy Walk</Link>
      <Link to="/about/projects/todo">ToDo App</Link>
      <Link to="/about/projects/cook">Cooking App</Link>
      </div>
        {props.match.params.projectName &&
      <div>
          <h2>Project: {props.match.params.projectName}</h2>
          <p>lorem ipsum</p>
          <button onClick={()=>props.history.goBack()}>Back</button>
      </div>
        }
  </>
  )
};
const Home = (props) => (
  <>
    <h1>Home</h1>
    <p>Hallo {props.name}</p>
  </>
)

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <NavLink exact to="/" activeStyle={{ color: "red" }}>HOME</NavLink>
          <NavLink exact to="/about" activeStyle={{ color: "red" }}>ABOUT</NavLink>
        </div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" render={() => <Home name={"Codebusters"} />} />
          <Route exact path="/about/projects" component={Projects} />
          <Route exact path="/about/projects/:projectName" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
