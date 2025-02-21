import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/dataFetch";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import { useCart } from "../Context/CartContext"; // ✅ Import cart context

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart(); // ✅ Get addToCart function

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  return (
    <div className="home-container">
      {/* ✅ Search & Filters */}
      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
      <Filters products={products} setFilteredProducts={setFilteredProducts} />

      {/* ✅ Product Listing */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
