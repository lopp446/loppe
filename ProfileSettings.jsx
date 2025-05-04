import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // pastikan path sesuai

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-1">{user.name}</h1>
      <p className="text-gray-500 mb-4">{user.email}</p>

      <div className="space-y-2">
        <button
          onClick={() => navigate("/edit-profile")}
          className="block w-full text-left bg-white p-4 rounded-md shadow hover:bg-gray-100"
        >
          Edit Profil
        </button>
        <button
          onClick={() => navigate("/change-password")}
          className="block w-full text-left bg-white p-4 rounded-md shadow hover:bg-gray-100"
        >
          Ganti Password
        </button>
        <button
          onClick={() => navigate("/saved-addresses")}
          className="block w-full text-left bg-white p-4 rounded-md shadow hover:bg-gray-100"
        >
          Alamat Tersimpan
        </button>
        <button
          onClick={() => navigate("/payment-methods")}
          className="block w-full text-left bg-white p-4 rounded-md shadow hover:bg-gray-100"
        >
          Metode Pembayaran
        </button>
        <button
          onClick={() => navigate("/notifications")}
          className="block w-full text-left bg-white p-4 rounded-md shadow hover:bg-gray-100"
        >
          Notifikasi
        </button>
      </div>
    </div>
  );
}
