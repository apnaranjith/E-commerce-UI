import React, { useState } from "react";

const SearchBar = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter products based on name, color, or type
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.color.toLowerCase().includes(query.toLowerCase()) ||
      product.type.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search for products..."
      value={searchQuery}
      onChange={(e) => handleSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
