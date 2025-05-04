import { NavLink } from "react-router-dom";
import { Home, Search, Heart, ShoppingCart, User } from "lucide-react";
import { motion } from "framer-motion";

const BottomNavigation = () => {
  const navItems = [
    { name: "Home", icon: <Home size={22} />, path: "/" },
    { name: "Search", icon: <Search size={22} />, path: "/search" },
    { name: "Wishlist", icon: <Heart size={22} />, path: "/wishlist" },
    { name: "Cart", icon: <ShoppingCart size={22} />, path: "/cart" },
    { name: "Profile", icon: <User size={22} />, path: "/profile" },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50 md:hidden"
    >
      <div className="flex justify-around items-center py-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium ${
                isActive ? "text-indigo-600" : "text-gray-400"
              }`
            }
          >
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default BottomNavigation;
