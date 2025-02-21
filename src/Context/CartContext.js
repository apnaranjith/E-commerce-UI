import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // ✅ Load cart from localStorage on initialization
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add item to cart (with quantity handling)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Update quantity (ensures correct state handling)
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, newQuantity) } // Prevent negative values
            : item
        )
        .filter((item) => item.quantity > 0) // Remove if quantity is 0
    );
  };

  // ✅ Remove item from cart
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // ✅ Get total cart count dynamically
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // ✅ Get total cart value
  const getCartTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem, cartCount, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
