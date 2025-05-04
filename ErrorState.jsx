import React from "react";

export default function ErrorState() {
  return (
    <section className="p-4 text-center text-red-600">
      <h3 className="text-lg font-semibold">Terjadi Kesalahan</h3>
      <p className="text-sm">Tidak dapat memuat data. Silakan coba lagi.</p>
    </section>
  );
}
