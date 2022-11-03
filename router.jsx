import React from 'react';
import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from 'react-router-dom';

import App from './src/App';
import Home from './src/routes/Home';
import Shop from './src/routes/Shop';
import ProductsList from './src/components/ProductsList';

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      exact
      path="/"
      element={<App />}
    >
      <Route errorElement={<div>Error screen</div>}>
        <Route index element={<Home />} />
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
);

export default router;
