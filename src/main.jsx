import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ProtectedRoutes from './components/protectedRoutes/protectedRoutes';
//importo contexto de productos
import { ProductsProvider } from './context/productsContext';
import CarritoPage from './pages/carrito/CarritoPage';
import ErrorPage from './pages/error/ErrorPage';
import LoginPage from './pages/login/LoginPage';
import NewsletterPage from './pages/newsletter/NewsletterPage';
import ProductPage from './pages/product/ProductPage';
import ProductsPage from './pages/products/ProductsPage';
import UsuarioPage from './pages/usuario/UsuarioPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/productos/:id" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/carrito"
              element={
                <ProtectedRoutes>
                  <CarritoPage />
                </ProtectedRoutes>
              }
            />
            <Route path="/carrito/:id" element={<CarritoPage />} />
            <Route
              path="/usuario/:id"
              element={
                <ProtectedRoutes>
                  <UsuarioPage />
                </ProtectedRoutes>
              }
            />
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ProductsProvider>,
);
