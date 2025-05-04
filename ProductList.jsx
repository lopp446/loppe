// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products = [], onAddToCart, onAddToWishlist }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}
