import React from "react";

export default function OrdersHistory() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Pesanan Saya</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex justify-between">
            <p className="font-medium">#ORD123456</p>
            <span className="text-sm text-yellow-500">Pending</span>
          </div>
          <p className="text-sm text-gray-600">2 Produk · 19 Apr 2025</p>
          <p className="font-semibold mt-1">Rp150.000</p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="flex justify-between">
            <p className="font-medium">#ORD123457</p>
            <span className="text-sm text-green-600">Selesai</span>
          </div>
          <p className="text-sm text-gray-600">1 Produk · 18 Apr 2025</p>
          <p className="font-semibold mt-1">Rp75.000</p>
        </div>
      </div>
    </section>
  );
}
