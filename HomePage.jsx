// src/pages/HomePage.jsx
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext";

const dummyProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "Elektronik",
    price: 8000000,
    description: "Laptop canggih untuk produktivitas tinggi.",
    image: "https://images.tokopedia.net/img/KRMmCm/2022/9/12/cea70077-6a42-4701-87bc-197e1a5f3b6d.jpg",
  },
  {
    id: 2,
    name: "Kaos",
    category: "Pakaian",
    price: 120000,
    description: "Kaos nyaman dan stylish untuk sehari-hari.",
    image: "https://i5.walmartimages.com/seo/Lord-Farquaad-Era-Tour-shirt-Lord-Farquaad-Shirt-BLACK-Color-size-XL_c43be3a1-0eef-4abc-b102-b7b393d260be.3b76e26c1270dc2b01a68b9c9ffa1541.jpeg",
  },
  {
    id: 3,
    name: "Snack",
    category: "Makanan",
    price: 25000,
    description: "Cemilan enak buat temen nonton.",
    image: "https://down-id.img.susercontent.com/file/51c0322e0d2769eb617ed148ba502668",
  },
  {
    id: 4,
    name: "Jam Tangan",
    category: "Aksesoris",
    price: 500000,
    description: "Jam tangan elegan untuk tampil percaya diri.",
    image: "https://down-id.img.susercontent.com/file/656a9c26fc39695d83367a2bed39fd3d",
  },
  {
    id: 5,
    name: "Headphone",
    category: "Elektronik",
    price: 450000,
    description: "Suara jernih dan bass mantap!",
    image: "https://asset.kompas.com/crops/-isfWvNYjvxuAUNUX4-nbBrV6FI=/33x0:972x626/1200x800/data/photo/2024/09/10/66e009fde233c.jpg",
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? dummyProducts.filter((product) => product.category === selectedCategory)
    : dummyProducts;

  return (
    <div className="p-4">
      <HeroSection />

      <div className="flex gap-2 mb-4">
        {["Elektronik", "Pakaian", "Makanan", "Aksesoris"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border rounded-full hover:bg-indigo-100 ${
              selectedCategory === category ? "bg-indigo-100 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
}
