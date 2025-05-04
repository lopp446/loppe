import React from "react";

export default function CheckoutFlow() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Alamat Pengiriman</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2"
            rows="3"
            placeholder="Masukkan alamat lengkap"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Metode Pembayaran</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>Pilih Metode</option>
            <option>Transfer Bank</option>
            <option>COD</option>
            <option>E-Wallet</option>
          </select>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-semibold">Rp120.000</span>
          </div>
          <button className="w-full py-3 bg-primary text-white font-bold rounded-lg">
            Konfirmasi Order
          </button>
        </div>
      </div>
    </section>
  );
}
