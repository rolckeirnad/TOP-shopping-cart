import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Alert } from '@material-tailwind/react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const timerHandler = useRef();

  const displayAlert = (text) => {
    clearTimeout(timerHandler.current);
    setAlertText(text);
    setAlert(true);
    timerHandler.current = setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

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
    displayAlert('Item added to cart!');
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const index = cart.findIndex((item) => item.id === id);
    newCart.splice(index, 1);
    setCart(newCart);
    displayAlert('Item removed from cart!');
  };

  return (
    <>
      <Header cart={cart} deleteItem={removeFromCart} />
      <Outlet context={addToCart} />
      <div className="overflow-hidden absolute bottom-0 right-0 w-fit p-8">
        <Alert
          show={alert}
          color="green"
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
          dismissible={{
            onClose: () => setAlert(false),
          }}
        >
          {alertText}
        </Alert>
      </div>
      <Footer />
    </>
  );
}

export default App;
