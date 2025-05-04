import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
