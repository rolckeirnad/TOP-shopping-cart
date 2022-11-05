import React from 'react';
import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from 'react-router-dom';

import ErrorEl from './src/routes/Error';
import App from './src/App';
import Home, { loader as newProductsLoader } from './src/routes/Home';
import Shop from './src/routes/Shop';
import ProductsList from './src/components/ProductsList';

const router = (queryClient) => (
  createHashRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
      >
        <Route errorElement={<ErrorEl />}>
      <Route errorElement={<div>Error screen</div>}>
          <Route index element={<Home />} loader={newProductsLoader(queryClient)} />
          <Route path="shop" element={<Shop />}>
            <Route path="" element={<ProductsList />} />
            <Route path="electronics" element={<ProductsList />} />
            <Route path="home" element={<ProductsList />} />
            <Route path="pets" element={<ProductsList />} />
          </Route>
          <Route path="about" element={<div>About</div>} />
        </Route>
      </Route>,
    ),
  )
);

export default router;
