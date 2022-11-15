import React from 'react';
import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from 'react-router-dom';

import ErrorEl from './src/routes/Error';
import App from './src/App';
import Home from './src/routes/Home';
import Shop, { loader as categoriesLoader } from './src/routes/Shop';
import ProductsList from './src/components/ProductsList';
import ItemDescription from './src/components/ItemDescription';
import About from './src/routes/About';

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
          />
          <Route path="shop" element={<Shop />} loader={categoriesLoader(queryClient)}>
            <Route path=":categoryPath" element={<ProductsList />} />
            <Route path="product/:productId" element={<ItemDescription />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Route>,
    ),
  )
);

export default router;
