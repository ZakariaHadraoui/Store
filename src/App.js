import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './shop';
import Cart from './cart';
import Navbar from './navbar';
import './App.css';
import Buttons from './buttons';

function App() {
  const [show, setshow] = useState(true);
  const [articles, setarticles] = useState([]);
  const [cart, setcart] = useState([]);

  function handleclick(item) {
    let ispresent = false;
    cart.forEach((product) => {
      if (product.id === item.id)
        ispresent = true;
    });
    if (ispresent) {
      alert('Item already exists');
      return;
    }
    setcart([...cart, item]);
  }

  const Fetchproducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setarticles(data));
  }

  useEffect(() => {
    Fetchproducts();
  }, []);
  const allItems = new Set(articles.map((ele) => ele.category));

  return (
    <BrowserRouter>
      <Navbar setshow={setshow} show={show} cart={cart} />
      {show && <Buttons items={[...allItems]} articles={articles} setarticles={setarticles} />}
      <Routes>
        <Route path='/' element={show ? <Shop handleclick={handleclick} articles={articles} /> : <Cart />}></Route>
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
