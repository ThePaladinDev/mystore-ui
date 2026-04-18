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
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import ProductDetail from './components/ProductDetail.jsx';

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
  </Route>,
);

const router = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
