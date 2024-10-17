import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.productId}>
              {item.productId} - Size: {item.size} - Quantity: {item.quantity}
              <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

