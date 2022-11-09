import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import { fetchSpecificCategory } from '../fake-store';
import { productsQuery } from '../routes/Shop';
import ItemPlaceholder from './ItemPlaceholder';
import ItemShop from './ItemShop';

const categoryQuery = (category) => ({
  queryKey: [`${category}`],
  queryFn: async () => fetchSpecificCategory(encodeURI(category)),
});

function ProductsList() {
  const { categoryPath } = useParams();
  const query = categoryPath ? categoryQuery(categoryPath) : productsQuery();
  const { data: products, isSuccess } = useQuery({
    ...query, staleTime: Infinity, useErrorBoundary: true, refetchOnMount: false,
  });
  return (
    <div className="col-start-2 col-end-[-1] overflow-y-auto">
      <div className="grid grid-cols-4 grid-flow-row gap-8 px-6 py-10">
        {!isSuccess && (Array(8).fill('')
          .map((_, ind) => <ItemPlaceholder key={`placeholder-${ind}`} />)
        )}
        {isSuccess && (products.map((product) => (
          <ItemShop product={product} />
        ))
        )}
      </div>
    </div>
  );
}
export default ProductsList;
