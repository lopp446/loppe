// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // pastikan path ini sesuai

const dummyProducts = [
  {
    id: 1,
    name: "Pulpen Aesthetic",
    price: "Rp5.000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Notebook Spiral",
    price: "Rp15.000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Tas Ransel Kuliah",
    price: "Rp75.000",
    image: "https://via.placeholder.com/150",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Selamat Datang di Vinteg</h1>
        <p className="mb-6 text-gray-600 max-w-md mx-auto">
          Temukan berbagai produk dan layanan terbaik untuk mahasiswa. Mudah, cepat, dan efisien.
        </p>
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Masuk ke Akun
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
