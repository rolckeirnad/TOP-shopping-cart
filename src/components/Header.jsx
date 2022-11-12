import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
  return (
    <div className="p-0 h-20 flex px-32 gap-8 justify-between items-center bg-black text-white ">
      <div className="relative overflow-hidden rounded-2xl">
        <img className="relative w-16" src="https://placekitten.com/g/128/128" alt="kitten" />
      </div>
      <nav>
        <ul className="flex gap-8 text-3xl">
          <li className="mr-6"><Link to="/"><span className="text-white hover:text-orange-500">Home</span></Link></li>
          <li className="mr-6"><Link to="shop/all"><span className="text-white hover:text-orange-500">Explore</span></Link></li>
          <li className="mr-6"><Link to="about"><span className="text-white hover:text-orange-500">About</span></Link></li>
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
            <button className="hover:text-orange-500 w-full h-full" type="button">
              <span className="fa-layers fa-fw w-full h-full">
                <FontAwesomeIcon icon={icon({ name: 'cart-shopping', style: 'solid' })} size="xl" />
                {cart?.length > 0 && <span className="fa-layers-counter relative top-5 left-4 bg-orange-800 scale-75">{totalItems}</span>}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
