import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Search product in cart by id
      const index = prevCart.findIndex((item) => item.id === product.id);
      // If found, update quantity with new quantity
      if (index > -1) {
        const newCart = [...prevCart];
        newCart[index] = { ...product, quantity: prevCart[index].quantity + quantity };
        return newCart;
      }
      // If not, just add the item to cart.
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
