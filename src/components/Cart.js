import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeItem, cartCount } = useCart();

  return (
    <div className="cart-container">
      <h2>Shopping Cart ({cartCount})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imageURL} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <p>{item.name}</p>
                <p>₹{item.price}</p>

                {/* ✅ Quantity Controls */}
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)} 
                    disabled={item.quantity <= 1} // Prevents negative quantity
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)} 
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
