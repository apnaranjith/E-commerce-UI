import React from "react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart, cart } = useCart();

    // ✅ Find if product is already in cart
    const cartItem = cart.find(item => item.id === product.id);
    const inCartQuantity = cartItem ? cartItem.quantity : 0; // Quantity in cart

    return (
        <div className="product-card">
            <img src={product.imageURL} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            {/* ✅ Show "Out of Stock" when stock is 0 */}
            <button 
                onClick={() => addToCart(product)} 
                disabled={product.quantity === 0}
            >
                {product.quantity === 0 ? "Out of Stock" : `Add to Cart (${inCartQuantity})`}
            </button>
        </div>
    );
};

export default ProductCard;
