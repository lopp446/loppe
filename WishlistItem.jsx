// src/components/WishlistItem.jsx
import React from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function WishlistItem({ product }) {
  const { removeFromWishlist } = useCart();

  return (
    <motion.div
      className="flex items-center gap-4 bg-white shadow-md p-4 rounded-2xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-xl"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-base">{product.name}</h3>
        <p className="text-indigo-600 font-medium">Rp {product.price}</p>
      </div>
      <button
        onClick={() => removeFromWishlist(product.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
}
