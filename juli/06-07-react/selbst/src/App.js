import logo from './birdy.png'
import './App.css'

function App() {
    const clickHere = () => console.log("Huhu");
    
    return (
        <div className="App">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="twitter-blue">Zwitscher</h1>
            <button onClick={clickHere}>Klick mich</button>
        </div>
    )
}

export default App