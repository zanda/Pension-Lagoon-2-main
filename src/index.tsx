import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Activites from './pages/Activites';
import Contact from './pages/Contact';
import Bungalows from './pages/Bungalows';
import Evenements from './pages/Evenements';
import Restaurant from './pages/Restaurant';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/bungalows', element: <Bungalows /> },
  { path: '/activites', element: <Activites /> },
  { path: '/evenements', element: <Evenements /> },
  { path: '/restaurant', element: <Restaurant /> },

  { path: '/contact', element: <Contact /> },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
