// src/components/CategoryQuickAccess.jsx
import React from "react";

export default function CategoryQuickAccess() {
  const categories = ["Elektronik", "Pakaian", "Makanan", "Aksesoris"];

  return (
    <div className="flex gap-3 overflow-x-auto mb-4">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-white border rounded-xl shadow-sm text-sm text-gray-700 hover:bg-indigo-50"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
