import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  Link,
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
    <div className="col-start-1 col-end-[-1] overflow-y-auto lg:col-start-2">
      <div className="grid grid-cols-1 grid-flow-row gap-8 px-4 pt-4 pb-8 sm:grid-cols-2 md:grid-cols-4 md:py-10 md:px-6">
        {!isSuccess && (Array(8).fill('')
          .map((_, ind) => <ItemPlaceholder key={`placeholder-${ind}`} />)
        )}
        {isSuccess && (products.map((product) => (
          <Link to={`../product/${product.id}`} state={{ product, from: categoryPath }} key={`product-${product.id}`}>
            <ItemShop product={product} />
          </Link>
        ))
        )}
      </div>
    </div>
  );
}
export default ProductsList;
