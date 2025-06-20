import React from 'react';

const Cart = ({ cart, removeFromCart,  decreaseQuantity,increaseQuantity, total }) => {
  return (
    <div style={{width: '100%',  borderLeft: '1px solid #ccc', margin: '10px' ,padding:'20px' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0',fontWeight:'bold'  }}>
            <p>Item Name</p>
            <p>Price  </p>
              <p>Quantity</p>
              </div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>
                <h4>{item.name}</h4>
                </div>
                <div>
                <p> ${item.price.toFixed(2)} x {item.quantity} </p>
              </div>
              <div className='buttons'>
                <button onClick={() => increaseQuantity(item.id)}>+</button>

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