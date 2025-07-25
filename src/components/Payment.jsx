import React, { useContext } from "react";
import '../App.css';
import { ShopContext } from '../context/ShopContext.jsx';

function Payment() {
  const { cart, getTotal, goToShopping } = useContext(ShopContext);

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  } 

  const handleGoToShopping = () => {
    goToShopping();  
  }

  return (
    <div className="payment">
      <label htmlFor="cash">Cash on delivery</label>
      <input type="radio" name="cash" id="cash" />
      <label htmlFor="card">Credit Card</label>
      <input type="radio" name="card" id="card"/>
      <br />
      <h2>Payment Details</h2>
      <div>
        <label htmlFor="card-no">Enter your card-number</label>
        <br />
        <input type="text" placeholder="card number" />
        <br />
        <label htmlFor="cvv">Enter your CVV</label>
        <br />
        <input type="text" placeholder="cvv" />
        <br />
        <label htmlFor="expiry">Enter your expiry date</label>
        <br />
        <input type="text" placeholder="expiry date" />
        <br />
        <p>
          Total Amount: $<span>{getTotal()}</span>
        </p>
        <button>Confirm Payment</button>
        <button onClick={handleGoToShopping}>go to Shopping</button>
      </div>
    </div>
  );
}

export default Payment;
