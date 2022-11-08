import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
        <ul className="flex gap-4">
          <li>
            <button className="hover:text-orange-500" type="button">
              <FontAwesomeIcon icon={icon({ name: 'search', style: 'solid' })} size="xl" />
            </button>
          </li>
          <li>
            <button className="hover:text-orange-500" type="button">
              <FontAwesomeIcon icon={icon({ name: 'cart-shopping', style: 'solid' })} size="xl" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
