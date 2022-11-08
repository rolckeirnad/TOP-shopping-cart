import React from 'react';
import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from 'react-router-dom';

import ErrorEl from './src/routes/Error';
import App from './src/App';
import Home, { loader as homeLoader } from './src/routes/Home';
import Shop, { loader as categoriesLoader } from './src/routes/Shop';
import ProductsList, { listLoader } from './src/components/ProductsList';

const router = (queryClient) => (
  createHashRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
      >
        <Route errorElement={<ErrorEl />}>
          <Route
            index
            element={<Home />}
            loader={homeLoader(queryClient)}
          />
          <Route path="shop" element={<Shop />} loader={categoriesLoader(queryClient)}>
            <Route path=":categoryPath" element={<ProductsList />} />
          </Route>
          <Route path="about" element={<div>About</div>} />
        </Route>
      </Route>,
    ),
  )
);

export default router;
