import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./Context/CartContext"; // ✅ Import Context

const Navbar = () => {
  const { cartCount } = useCart(); // ✅ Get cart count from context

  return (
    <nav>
      <Link to="/">Products</Link>
      <Link to="/cart">🛒 {cartCount}</Link> {/* ✅ Live updating cart count */}
    </nav>
  );
};

function App() {
  return (
    <CartProvider> {/* ✅ Wrap the entire app with context */}
      <Router>
        <Navbar /> {/* ✅ Use the navbar inside the provider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
