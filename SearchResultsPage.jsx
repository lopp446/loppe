// src/pages/SearchResultsPage.jsx
import React from "react";
import { useProduct } from "../context/ProductContext";
import ProductList from "../components/ProductList";

export default function SearchResultsPage() {
  const { searchResults } = useProduct();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hasil Pencarian</h1>
      {searchResults && searchResults.length > 0 ? (
        <ProductList products={searchResults} />
      ) : (
        <p className="text-gray-500 text-center">Tidak ada hasil ditemukan.</p>
      )}
    </div>
  );
}
