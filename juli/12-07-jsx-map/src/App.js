import './App.css';

const userProfile = {
  name: "Maxim",
  favoriteFoods: [
    {category: "fruits", name: "Plum"},
    {category: "main", name: "Plov"},
    {category: "desert", name: "Tiramisu"},
  ]
}

function App() {
  // const jsxListElements = userProfile.favoriteFoods.map(foodObj =><li>{foodObj.name}</li>)

  return (
    <div className="App">
      <h1>{userProfile.name}</h1>
      <ul>
        {userProfile.favoriteFoods.map((foodObj,i) => (
          <li className='food' key={i}>{foodObj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
