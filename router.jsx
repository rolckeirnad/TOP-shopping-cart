import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './src/App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route errorElement={<div>Error screen</div>}>
        <Route index element={<div>Index</div>} />
        <Route path="shop" element={<div>Shop</div>} />
        <Route path="about" element={<div>About</div>} />
      </Route>
    </Route>,
  ),
);

export default router;
