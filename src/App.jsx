import React, { useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Shoes from './components/Shoes.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existingShoe = cart.find(item => item.id === shoe.id);
    if (existingShoe) {
      setCart(cart.map(item => 
        item.id === shoe.id ? { ...existingShoe, quantity: existingShoe.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    const existingShoe = cart.find(item => item.id === id);
    if (existingShoe.quantity > 1) {
      setCart(cart.map(item => 
        item.id === id ? { ...existingShoe, quantity: existingShoe.quantity - 1 } : item
      ));
    } else {
      removeFromCart(id);
    }
  };
  const increaseQuantity = (id) => {
    const existingShoe = cart.find(item => item.id === id);
    if (existingShoe.quantity > 1) {
      setCart(cart.map(item => 
        item.id === id ? { ...existingShoe, quantity: existingShoe.quantity + 1 } : item
      ));
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex' }}>
      <Shoes addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}  total={getTotal()} />
    </div>
    </div>
  );
};

export default App;
