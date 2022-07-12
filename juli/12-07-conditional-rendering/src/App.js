import './App.css';

const formalGreet = false;
const firstName = "Maxim";
const lastName = "Werkowski";

function greet(type, firstName, lastName) {
  if (formalGreet){
    return <h1>Sehr geehrter Herr {lastName}</h1>
  } else {
    return <h1>Hi {firstName}</h1>
  }
}

function generateGreeting(formal, firstName, lastName, gender) {
  let address = "";
  if (formal) {
    if (gender === "female"){
      address = "Sehr geehrte Frau";
    }else {
      address = "Sehr geehrter Herr";
    }
  } else {
    address = "Hi";
  }
  return <h1>{address} {formal ? lastName : firstName}</h1>;
}

function App() {
  return (
    <div className="App">
      {/* {greet("informal", "Maxim", "X")} */}
      {formalGreet ? (
        <h1>Sehr geehrter Herr {lastName}</h1>
      ) : (
        <h1>Hi {firstName}</h1>
      )}
      {generateGreeting(true, "Mercedes", "Benz", "female")}
    </div>
  );
}

export default App;
