import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Facilities", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "#" },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        onClick={() => navigate("/")}
        className="text-white uppercase bg-transparent border-none cursor-pointer"
        style={{ fontSize: "0.85rem", letterSpacing: "0.2em", fontWeight: 600 }}
      >
        OVISION
      </button>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="text-white/60 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
            style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
