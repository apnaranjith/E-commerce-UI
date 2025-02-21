import React, { useState } from "react";

const Filters = ({ products, setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    gender: "",
    color: "",
    type: "",
    priceRange: [],
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    let updatedFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        updatedFilters.priceRange = [...filters.priceRange, value];
      } else {
        updatedFilters.priceRange = filters.priceRange.filter((range) => range !== value);
      }
    } else {
      updatedFilters = { ...filters, [name]: value };
    }

    setFilters(updatedFilters);

    // Apply filters
    let filtered = products;

    if (updatedFilters.gender) {
      filtered = filtered.filter((p) => p.gender === updatedFilters.gender);
    }
    if (updatedFilters.color) {
      filtered = filtered.filter((p) => p.color === updatedFilters.color);
    }
    if (updatedFilters.type) {
      filtered = filtered.filter((p) => p.type === updatedFilters.type);
    }
    if (updatedFilters.priceRange.length > 0) {
      filtered = filtered.filter((p) => {
        return updatedFilters.priceRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return p.price >= min && p.price <= max;
        });
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="filters">
      {/* Gender Filter */}
      <select name="gender" value={filters.gender} onChange={handleFilterChange}>
        <option value="">All Genders</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>

      {/* Color Filter */}
      <select name="color" value={filters.color} onChange={handleFilterChange}>
        <option value="">All Colors</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>

      {/* Type Filter */}
      <select name="type" value={filters.type} onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="Polo">Polo</option>
        <option value="Hoodie">Hoodie</option>
      </select>

      {/* Price Range Filter - Checkboxes */}
      <div className="price-filters">
        <label>
          <input
            type="checkbox"
            name="priceRange"
            value="0-250"
            onChange={handleFilterChange}
          />
          ₹0 - ₹250
        </label>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            value="251-500"
            onChange={handleFilterChange}
          />
          ₹251 - ₹500
        </label>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            value="501-1000"
            onChange={handleFilterChange}
          />
          ₹501 - ₹1000
        </label>
      </div>
    </div>
  );
};

export default Filters;
