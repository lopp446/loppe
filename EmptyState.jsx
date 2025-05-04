import React from "react";

export default function EmptyState() {
  return (
    <section className="p-4 text-center">
      <img
        src="https://via.placeholder.com/120"
        className="mx-auto mb-4"
        alt="Empty"
      />
      <h3 className="text-lg font-semibold">Tidak ada item</h3>
      <p className="text-sm text-gray-600">
        Keranjang kamu masih kosong, yuk mulai belanja!
      </p>
    </section>
  );
}
