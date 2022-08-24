import {BrowserRouter, NavLink, Routes, Route} from'react-router-dom'
import './App.css';
import Pay from './components/Pay';
import Vacuum from './components/Vacuum';
import Login from './components/Login';
import {useState} from 'react'

function App() {

  const[user, setUser]=useState({user:"Sabina"})  // wenn useState 'null' ist dann redirect zu 'user/login'

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          
        </header>
        <main>
          <Routes>
            <Route path='/products/vacuum' element={<Vacuum user={user} />} />
            <Route path='/cart/pay' element={<Pay />} />
            <Route path='/user/login' element={<Login />} />
          </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
