import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Viewcart from './components/viewcart';
import { createContext, useState } from 'react';

export const cartContext=createContext();

function App() {
  const[cart,setCart]=useState([]);
  return (<>
   <cartContext.Provider value={{cart,setCart}}>
   <BrowserRouter><Header cart={cart} />
  <div className="App">
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Viewcart' element={<Viewcart />} />
   </Routes>
  </div>
  </BrowserRouter>
   </cartContext.Provider>
  </>);
}

export default App;
