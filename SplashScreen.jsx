import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Suara sambutan
    const speak = () => {
      const msg = new SpeechSynthesisUtterance("Selamat datang di Vinteg App");
      msg.lang = "id-ID";
      window.speechSynthesis.speak(msg);
    };

    speak();

    // 2. Mulai fade out setelah 2.5 detik
    const timer1 = setTimeout(() => setVisible(false), 2500);
    // 3. Redirect setelah 3 detik
    const timer2 = setTimeout(() => navigate("/login"), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.speechSynthesis.cancel();
    };
  }, [navigate]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-indigo-600 flex flex-col items-center justify-center text-white"
        >
          {/* Logo animasi */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src="/logo.png"
              alt="Vinteg Logo"
              className="w-24 h-24 mb-4"
            />
          </motion.div>

          <motion.h1
            className="text-5xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Vinteg
          </motion.h1>
          <motion.p
            className="text-xl mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Selamat datang di Vinteg App
          </motion.p>

          {/* Loading Indicator */}
          <motion.div
            className="mt-6 animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
