import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faPerson, faComputer, faGem, faPersonDress, faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  Link,
  NavLink, Outlet, useOutletContext,
} from 'react-router-dom';
import {
  Button,
  Menu, MenuHandler, MenuItem, MenuList,
} from '@material-tailwind/react';
import { fetchCategories, fetchProducts } from '../fake-store';

library.add(fas);

const customIcons = [faComputer, faGem, faPerson, faPersonDress];

const categoriesQuery = () => ({
  queryKey: ['categories'],
  queryFn: async () => fetchCategories(),
});

export const productsQuery = () => ({
  queryKey: ['all'],
  queryFn: async () => fetchProducts(),
});

export const loader = (queryClient) => async () => {
  const categories = categoriesQuery();
  const products = productsQuery();
  await queryClient.fetchQuery({
    ...categories, staleTime: Infinity, refetchOnMount: false, useErrorBoundary: true,
  });
  queryClient.fetchQuery({ ...products, staleTime: Infinity });
};

function Shop() {
  const { data: categories } = useQuery(
    {
      ...categoriesQuery(),
      staleTime: Infinity,
      useErrorBoundary: true,
    },
  );

  const linkBaseStyle = 'flex items-center pl-2 ease-in-out duration-300';
  const linkActiveStyle = 'bg-orange-600';

  const addToCart = useOutletContext();
  return (
    <>
      <div className="w-full h-12 md:hidden">
        <Menu>
          <MenuHandler>
            <Button className="bg-black w-full rounded-none">Menu</Button>
          </MenuHandler>
          <MenuList className="w-full capitalize text-lg">
            <Link to="/shop/all">
              <MenuItem>New</MenuItem>
            </Link>
            {categories && categories.map((category) => (
              <Link to={`/shop/${encodeURI(category)}`} key={`${category}-menu-entry`}>
                <MenuItem>
                  {category}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </div>
      <div className="grid grid-cols-5 h-full overflow-hidden">
        <div className="hidden col-span-1 py-10 capitalize text-white bg-gray-800 text-2xl md:flex md:flex-col gap-6">
          <NavLink to="/shop/all" className={({ isActive }) => (isActive ? `${linkBaseStyle} ${linkActiveStyle}` : linkBaseStyle)}>
            <FontAwesomeIcon icon={icon({ name: 'star', style: 'solid' })} />
            <h2 className="flex-1 ml-5 ease-in-out duration-300 hover:scale-105">All</h2>
          </NavLink>
          {categories && categories.map((category, i) => (
            <NavLink to={`/shop/${encodeURI(category)}`} className={({ isActive }) => (isActive ? `${linkBaseStyle} ${linkActiveStyle}` : linkBaseStyle)} key={`${category}-sidebar-entry`}>
              <FontAwesomeIcon icon={customIcons[i] || faCircleExclamation} />
              <h2 className="flex-1 ml-5 ease-in-out duration-300 hover:scale-105">{category}</h2>
            </NavLink>
          ))}
        </div>
        <Outlet context={addToCart} />
      </div>
    </>
  );
}

export default Shop;
