import { motion } from "framer-motion";
import { useState } from "react";

const MotionDiv = motion.div as any;

export default function Navbar() {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      // relies on Tailwind's scroll-mt-32 that you already added
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="absolute top-6 left-0 w-full flex justify-end items-center px-12 z-50">
      <ul className="flex space-x-10 text-lg font-medium text-black relative">
        {menuItems.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer transition-colors duration-300 bg-transparent outline-none ${
                active === item.id
                  ? "text-pink-500 font-semibold"
                  : "hover:text-pink-400"
              }`}
            >
              {item.label}
            </button>

            {active === item.id && (
              <MotionDiv
                layoutId="underline"
                className="absolute left-0 bottom-[-5px] h-[2px] w-full bg-pink-500 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
