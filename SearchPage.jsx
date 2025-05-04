import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

export default function Search() {
  const [query, setQuery] = useState("");
  const { setSearchResults, setSelectedProduct } = useProduct();
  const navigate = useNavigate();

  const dummyProducts = [
    { id: 1, name: "Produk A", price: 100000 },
    { id: 2, name: "Produk B", price: 150000 },
  ];

  const handleSearch = () => {
    const results = dummyProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    navigate("/search-results");
  };

  const goToDetail = (product) => {
    setSelectedProduct(product);
    navigate("/product-detail");
  };

  return (
    <section className="p-4">
      <input
        type="text"
        className="w-full border rounded-lg px-3 py-2 mb-4"
        placeholder="Cari produk..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="w-full py-2 bg-primary text-white rounded mb-4"
        onClick={handleSearch}
      >
        Cari
      </button>

      <ul className="space-y-2">
        {dummyProducts.map((product) => (
          <li
            key={product.id}
            className="p-3 border rounded cursor-pointer hover:bg-gray-50"
            onClick={() => goToDetail(product)}
          >
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm text-gray-500">Rp{product.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
