import React from 'react';

const Cart = ({ cart, removeFromCart, decreaseQuantity, total }) => {
  return (
    <div style={{width: '100%',  borderLeft: '1px solid #ccc', margin: '10px' ,padding:'20px' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className='buttons'>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick ={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};


export default Cart;