import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, ClipboardList, User } from "lucide-react";

export default function BottomNavigation() {
  const { pathname } = useLocation();
  const navItems = [
    { to: "/", icon: <Home size={20} />, label: "Home" },
    { to: "/search", icon: <Search size={20} />, label: "Search" },
    { to: "/orders", icon: <ClipboardList size={20} />, label: "Orders" },
    { to: "/checkout", icon: <ShoppingCart size={20} />, label: "Cart" },
    { to: "/profile", icon: <User size={20} />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-md">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-xs ${
            pathname === item.to ? "text-primary" : "text-gray-500"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
