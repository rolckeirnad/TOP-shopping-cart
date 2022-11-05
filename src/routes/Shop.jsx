import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchCategories } from '../fake-store';

const categoriesQuery = () => ({
  queryKey: ['categories'],
  queryFn: async () => fetchCategories(),
});

export const loader = (queryClient) => async () => {
  const query = categoriesQuery();
  await queryClient.fetchQuery({
    ...query, staleTime: Infinity, refetchOnMount: false, useErrorBoundary: true,
  });
};

function Shop() {
  const { data: categories } = useQuery(
    {
      ...categoriesQuery(),
      staleTime: Infinity,
      useErrorBoundary: true,
    },
  );

  return (
    <div className="grid grid-cols-5 h-full">
      <div className="col-span-1 pl-5 bg-deep-orange-100">
        <h1 className="text-xl text-center sm:text-3xl leading-4">Categories</h1>
        <Link to="/shop"><h2 className="text-lg border-gray-600 border-b-2 hover:bg-orange-600">New</h2></Link>
        {categories.map((category, i) => <Link to={`${category}`} key={`${category}-${i}`}><h2 className="text-lg border-gray-600 border-b-2 hover:bg-orange-600">{category}</h2></Link>)}
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;
