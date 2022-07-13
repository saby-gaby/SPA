// import logo from "./birdy.png";
import "./App.scss";
import {Button} from 'react-bootstrap'
import gezwitscher from "./gezwitscher.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from './components/Timeline/Timeline'

function App() {
  let loggedIn = false;
  // const clickHere = () => console.log("Huhu");

  return (
    <div className="App">
      <img src="images/birdy.png" className="logo" alt="logo" />
      <h1 className="twitter-blue">Zwitscher</h1>
      <h2>Posts</h2>
      <Timeline />
      <Button variant="info">Click</Button>
    </div>
  );
}

export default App;
