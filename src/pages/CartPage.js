import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
    const { cart, updateQuantity, removeItem, cartCount } = useCart();
    const [inputValues, setInputValues] = useState({});

    // ✅ Sync local input state with cart items
    useEffect(() => {
        setInputValues(cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {}));
    }, [cart]);

    // ✅ Calculate total price
    const getTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // ✅ Handle quantity input change
    const handleQuantityChange = (id, value) => {
        if (value === "") {
            setInputValues((prev) => ({ ...prev, [id]: "" })); // Allow temporary empty value
        } else {
            let newQuantity = Number(value);
            if (newQuantity >= 1) {
                setInputValues((prev) => ({ ...prev, [id]: newQuantity }));
                updateQuantity(id, newQuantity);
            }
        }
    };

    return (
        <div className="cart-page">
            <h2>🛒 Shopping Cart ({cartCount})</h2>

            {/* Empty Cart Message */}
            {cart.length === 0 ? (
                <p className="empty-cart-msg">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                {/* Product Name */}
                                <p className="cart-item-name">{item.name}</p>

                                {/* Product Price */}
                                <p className="cart-item-price">₹{item.price}</p>

                                {/* ✅ Fixed Quantity Input */}
                                <input
                                    type="number"
                                    min="1"
                                    value={inputValues[item.id] || ""}
                                    className="quantity-input"
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    onBlur={() => {
                                        if (!inputValues[item.id]) {
                                            setInputValues((prev) => ({ ...prev, [item.id]: 1 }));
                                            updateQuantity(item.id, 1); // Reset to 1 if empty on blur
                                        }
                                    }}
                                />

                                {/* ✅ Delete Button */}
                                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                                     Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* ✅ Total Price */}
                    <h3 className="cart-total">
                        Total: <span>₹{getTotal()}</span>
                    </h3>
                </>
            )}
        </div>
    );
};

export default CartPage;
