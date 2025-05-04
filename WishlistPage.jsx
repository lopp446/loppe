// src/pages/WishlistPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import WishlistItem from "../components/WishlistItem";

export default function WishlistPage() {
  const { wishlist } = useCart(); // ✅ gunakan useCart

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Wishlist Saya</h1>
      {wishlist?.length === 0 ? (
        <p className="text-gray-500">Wishlist kamu kosong 🥲</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {wishlist?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
