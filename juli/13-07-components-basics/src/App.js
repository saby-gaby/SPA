// import logo from "./birdy.png";
import "./App.scss";
import {Button} from 'react-bootstrap'
import gezwitscher from "./gezwitscher.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Timeline from './components/Timeline/Timeline'

function App() {
  let loggedIn = false;
  // const clickHere = () => console.log("Huhu");

  return (
    <div className="App">
      <Header />
      <Timeline />
      <Button variant="info">Click</Button>
    </div>
  );
}

export default App;
