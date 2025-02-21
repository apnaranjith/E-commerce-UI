import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cartCount } = useCart();
  const [animated, setAnimated] = useState(false);

  // Trigger animation when cart count updates
  useEffect(() => {
    if (cartCount > 0) {
      setAnimated(true);
      setTimeout(() => setAnimated(false), 500); // Reset animation after 500ms
    }
  }, [cartCount]);

  return (
    <Link to="/cart" className={`cart-icon ${animated ? "cart-bounce" : ""}`}>
      🛒
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </Link>
  );
};

export default CartIcon;
