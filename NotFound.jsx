import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Kembali ke Beranda
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
