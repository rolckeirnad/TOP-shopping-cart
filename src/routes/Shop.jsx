import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Shop() {
  return (
    <div className="grid grid-cols-5 h-full">
      <div className="col-span-1 pl-5 bg-deep-orange-100">
        <h1 className="text-xl text-center sm:text-3xl leading-4">Categories</h1>
        <Link to="/shop"><h2 className="text-lg border-gray-600 border-b-2 hover:bg-orange-600">New</h2></Link>
        <Link to="/shop/electronics"><h2 className="text-lg border-gray-600 border-b-2 hover:bg-orange-600">Electronics</h2></Link>
        <Link to="/shop/home"><h2 className="text-lg border-gray-600 border-b-2 hover:bg-orange-600">Home</h2></Link>
        <Link to="/shop/pets"><h2 className="text-lg border-gray-600 border-b-2 hover:bg-orange-600">Pets</h2></Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;
