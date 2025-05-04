// src/components/ProductCard.jsx
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onAddToCart }) => {
  const { addToWishlist, wishlist } = useCart();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow p-4 transition-all duration-300 border border-gray-100"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-xl mb-3"
        />
        <h3 className="font-semibold text-base text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 truncate">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-indigo-600 font-bold text-lg">Rp {product.price}</span>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => addToWishlist(product)}
          className={`transition-colors ${
            isInWishlist ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
          }`}
          title={isInWishlist ? "Sudah di wishlist" : "Tambah ke wishlist"}
        >
          <Heart size={20} />
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-indigo-600 text-white px-3 py-1.5 rounded-xl text-sm hover:bg-indigo-700 transition-colors flex items-center gap-1"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
