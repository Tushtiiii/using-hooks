import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Shoes from './components/Shoes.jsx';
import Cart from './components/Cart.jsx';
import Payment from './components/Payment.jsx';
import { ShopProvider, ShopContext } from './context/ShopContext.jsx';
import { useContext } from 'react';

const AppContent = () => {
  const { shop } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {shop ? <Shoes /> : <Payment />}
        <Cart />
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <ShopProvider>
        <AppContent />
      </ShopProvider>
    </div>
  );
};

export default App;
