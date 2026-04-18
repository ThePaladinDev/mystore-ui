import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import Home from './components/Home.jsx';
import Error from './pages/Error.jsx';

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
  </Route>,
);

const router = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
