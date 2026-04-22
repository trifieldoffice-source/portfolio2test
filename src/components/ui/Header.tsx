"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "SERVICE", path: "/service" },
  { name: "WORKS", path: "/works" },
  { name: "PROCESS", path: "/process" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        isScrolled
          ? "bg-deep-blue/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-serif text-white hover:text-gold transition-colors duration-300 tracking-wider z-[60]"
        >
          TRIFIELD
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className="group relative py-2"
              >
                <span className={`text-[11px] tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-light-gray group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                <motion.div
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 h-[1px] bg-gold"
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center z-[60]">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-light-gray hover:text-gold focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-deep-blue z-[50] flex flex-col items-center justify-center pt-20 px-6"
          >
            <nav className="flex flex-col items-center space-y-8 w-full">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.path}
                      className={`block py-4 text-2xl font-serif tracking-[0.2em] transition-colors ${
                        isActive ? "text-gold" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-20 text-[10px] text-gold/40 tracking-[0.5em] uppercase">
              Digital Curation Studio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
