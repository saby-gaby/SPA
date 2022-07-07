import logo from "./birdy.png";
import "./App.css";
import gezwitscher from "./gezwitscher.js";

function App() {
  let loggedIn = false;
  const clickHere = () => console.log("Huhu");

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="twitter-blue">Zwitscher</h1>
      <button onClick={clickHere}>Klick mich</button>
      <h2>Posts</h2>
      {gezwitscher.map((post, i) => {
        return (
          <div key={i} className="post">
            <p>
              <b>{post.user}</b>
            </p>
            <p>{post.content}</p>
            <p>{post.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
