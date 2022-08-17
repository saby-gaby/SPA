import "./App.css";
import React, { useState, useEffect } from "react";
import Product from "./components/Product";

const productsContext = React.createContext(null);
export { productsContext };

function App() {
  const [products, setProducts] = useState([
    { title: "iphone", price: 500, like: false },
  ]);

  function updateLike(id) {
    setProducts([{ ...products[0], like: !products[0].like }]);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="App">
      <productsContext.Provider value={{ updateLike: updateLike, products: products }}>
        <Product />
      </productsContext.Provider>
    </div>
  );
}

export default App;
