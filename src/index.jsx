import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '../router';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
const queryRouter = router(queryClient);
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient} contextSharing>
        <RouterProvider router={queryRouter} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
