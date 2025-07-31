import React, { useContext } from 'react';
import '../App.css';
import { ShopContext } from '../context/ShopContext.jsx';

const shoes = [
  { id: 1, name: 'Running Shoe', price: 59, image: '/assets/shoe4.jpg' },
  { id: 2, name: 'Basketball Shoe', price: 79, image: '/assets/shoe3.jpg' },
  { id: 3, name: 'Casual Shoe', price: 49, image: '/assets/shoe1.png' },
  { id: 4, name: 'sports Shoe', price: 59, image: '/assets/shoe2.png' },
  { id: 5, name: ' dancing Shoe', price: 79, image: '/assets/R (1).png' },
  { id: 6, name: ' Shoe', price: 49, image: '/assets/R.jpg' },
];

function Shoes() {
  const { addToCart } = useContext(ShopContext);

  return (
    <>
    <div style={{ display: 'flex'}}> 
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
    </>
  );
}

export default Shoes;
