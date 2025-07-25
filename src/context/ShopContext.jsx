import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(true); 

  const addToCart = (shoe) => {
    const existingShoe = cart.find((item) => item.id === shoe.id);
    if (existingShoe) {
      setCart(
        cart.map((item) =>item.id === shoe.id ? { ...existingShoe, quantity: existingShoe.quantity + 1 }: item)
  );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    const existingShoe = cart.find((item) => item.id === id);
    if (existingShoe.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...existingShoe, quantity: existingShoe.quantity - 1 }
            : item
        )
      );
    } else {
      removeFromCart(id);
    }
  };

  const increaseQuantity = (id) => {
    const existingShoe = cart.find((item) => item.id === id);
    if (existingShoe.quantity >= 1) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...existingShoe, quantity: existingShoe.quantity + 1 }
            : item
        )
      );
    }
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const goToPayment = () => {
    setShop(false);
  };

  const goToShopping = () => {
    setShop(true);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        getTotal,
        shop,
        goToPayment,
        goToShopping,
      }}>
      {children}
    </ShopContext.Provider>
  );
};
