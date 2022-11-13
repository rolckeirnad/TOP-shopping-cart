import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  Popover, PopoverContent, PopoverHandler,
} from '@material-tailwind/react';
import CartItem from './CartItem';

function Header({ cart, deleteItem }) {
  const cartObj = cart.reduce((obj, item) => {
    const { totalItems, totalAmount } = obj;
    const newObj = {
      totalItems: totalItems + item.quantity,
      totalAmount: ((totalAmount + (item.quantity * item.price)) * 100) / 100,
    };
    return newObj;
  }, { totalAmount: 0, totalItems: 0 });

  return (
    <div className="p-0 h-16 flex justify-around items-center bg-black text-white md:justify-between md:h-20 md:gap-8 md:px-32">
      <div className="hidden relative overflow-hidden rounded-2xl">
        <img className="md:block relative w-16" src="https://placekitten.com/g/128/128" alt="kitten" />
      </div>
      <nav>
        <ul className="flex items-center gap-8 text-3xl">
          <li className="h-full">
            <Link to="/" className="flex">
              <IconButton className="bg-black md:hidden">
                <FontAwesomeIcon icon={icon({ name: 'home', style: 'solid' })} className="w-full h-full" />
              </IconButton>
              <span className="hidden md:block text-white hover:text-orange-500">Home</span>
            </Link>
          </li>
          <li className="h-full">
            <Link to="shop/all" className="flex">
              <IconButton className="bg-black md:hidden">
                <FontAwesomeIcon icon={icon({ name: 'store', style: 'solid' })} className="w-full h-full" />
              </IconButton>
              <span className="hidden md:block text-white hover:text-orange-500">Explore</span>
            </Link>
          </li>
          <li className="h-full">
            <Link to="about" className="flex">
              <IconButton className="bg-black md:hidden">
                <FontAwesomeIcon icon={icon({ name: 'book', style: 'solid' })} className="w-full h-full" />
              </IconButton>
              <span className="hidden md:block text-white hover:text-orange-500">About</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="w-24 flex justify-around items-center gap-4">
          <li>
            <button className="hover:text-orange-500" type="button">
              <FontAwesomeIcon icon={icon({ name: 'search', style: 'solid' })} size="xl" />
            </button>
          </li>
          <li className="h-10 w-1/3">
            <Popover placement="bottom-end">
              <PopoverHandler>
                <button className="hover:text-orange-500 w-full h-full" type="button">
                  <span className="fa-layers fa-fw w-full h-full">
                    <FontAwesomeIcon icon={icon({ name: 'cart-shopping', style: 'solid' })} size="xl" />
                    {cart?.length > 0 && <span className="fa-layers-counter relative top-5 left-4 bg-orange-800 scale-75">{cartObj.totalItems}</span>}
                  </span>
                </button>
              </PopoverHandler>
              <PopoverContent className="flex flex-col w-1/3 max-h-[80%]">
                <h2 className="text-lg -mt-2">Your Cart</h2>
                <hr className="mb-2" />
                <div className="flex flex-col gap-8 overflow-auto">
                  {cart.length > 0
                    ? cart.map((item) => <CartItem item={item} deleteItem={deleteItem} key={`cartItem-${item.id}`} />)
                    : <div>Your cart is empty</div>}
                </div>
                <hr className="my-4" />
                <div className="flex justify-end text-lg font-bold">
                  Subtotal: $
                  {' ' }
                  <span>{cartObj.totalAmount}</span>
                </div>
                <Button className="bg-black" disabled>Continue to Shipping</Button>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
