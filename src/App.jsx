import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
