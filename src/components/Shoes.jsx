import React from 'react';
import '../App.css'

const shoes = [
  { id: 1, name: 'Running Shoe', price: 59, image: '/assets/shoe4.jpg' },
  { id: 2, name: 'Basketball Shoe', price: 79, image: '/assets/shoe3.jpg' },
  { id: 3, name: 'Casual Shoe', price: 49, image: '/assets/shoe1.png' },
  { id: 4, name: 'Running Shoe', price: 59, image: '/assets/shoe2.png' },
  { id: 5, name: 'Basketball Shoe', price: 79, image: '/assets/shoe3.jpg' },
  { id: 6, name: 'Casual Shoe', price: 49, image: '/assets/shoe4.jpg' },
];

function Shoes({ addToCart }){   
  
     return (
      <div>
      <h2 style={{ textAlign: 'center'}}>Available Shoes</h2>
        <div className='shoelist'>
          {shoes.map(shoe => (
            <div key={shoe.id}>
              <img src={shoe.image} id='img' />
              <h3>{shoe.name}</h3>
              <p>Price: ${shoe.price}</p>
              <button onClick={() => addToCart(shoe)} id='add-item'>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      );
}

export default Shoes;