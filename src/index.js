import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct in React 18
import App from "./App";
import { CartProvider } from "./Context/CartContext";
 import "./styles/styles.css"

import "./styles/CartIcon.css"; // Add styles
import "./styles/Cart.css"; // ✅ Importing the CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
