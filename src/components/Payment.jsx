import React, { useContext } from "react";
import '../App.css';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';


function Payment() {
  const { cart, getTotal } = useContext(ShopContext);

  return (
    <>
    <div className="payment"  style={{ display: 'flex' }}>
      <label htmlFor="cash">Cash on delivery</label>
      <input type="radio" name="cash" id="cash" />
      <label htmlFor="card">Credit Card</label>
      <input type="radio" name="card" id="card"/>
        <h2>Payment Details</h2>
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
        <Link to="/">
         <button style={{ padding: "10px 20px" }} >go to Shopping</button>
        </Link>
      </div>      
    </>
  );
}

export default Payment;
