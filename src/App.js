import React, { useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';


export const dataContext = createContext()
function App() {
  const allProduct = [
    { name: 'Adcom', class: 1 }, { name: 'AAdnc', class: 1 }, { name: 'Ansdjkc', class: 1 },
    { name: 'Bdcom', class: 2 }, { name: 'BGcoms', class: 2 }, { name: 'Ceomha', class: 2 },
    { name: 'Cdcom', class: 3 }, { name: 'Cddjcnc', class: 3 }, { name: 'sndncsd', class: 3 },
    { name: 'Ddcom', class: 4 }, { name: 'JHudedw', class: 4 }, { name: 'JCdecdc', class: 4 },
    { name: 'Edcom', class: 5 }, { name: 'Endksjcvn', class: 5 }, { name: 'Esjdcndjcn', class: 5 }
  ]
  const [product, setProduct] = useState([])

  useEffect(() => {
    setProduct(allProduct);
  }, [])

  

  return (
    <dataContext.Provider value={[product, setProduct]} className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/product/:name"><ProductDetails /></Route>
          <Route path="*"><h1>404 not found</h1></Route>
        </Switch>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
