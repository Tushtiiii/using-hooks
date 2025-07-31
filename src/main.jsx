import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Shoes from './components/Shoes.jsx';
import Payment from './components/Payment.jsx';
import { ShopProvider } from './context/ShopContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
      <Route path="/" element={<Shoes />} />
      <Route path="/payment" element={<Payment />} />
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <ShopProvider>
    <RouterProvider router={router} />   
  </ShopProvider> 
  </React.StrictMode>
)