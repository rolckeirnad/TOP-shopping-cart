import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, { ...product, quantity }];
      return newCart;
    });
  };
  return (
    <>
      <Header cart={cart} />
      <Outlet context={addToCart} />
      <Footer />
    </>
  );
}

export default App;
