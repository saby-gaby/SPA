import { useState } from 'react';
import './App.css';
import CarList from './components/CarList';

function App() {
  const [cars, setCars] = useState(["Audi", "Porsche", "VW"]);

  function handleTeslaClick() {
    setCars([...cars, "Tesla"])
  }

  return (
    <div className="App">
      <CarList cars={cars} />
      <button onClick={handleTeslaClick}>Add Tesla</button>
    </div>
  );
}

export default App;
