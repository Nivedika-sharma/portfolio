import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  //navbar on sccrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full max-w-full bg-transparent opacity-100 text-Black py-4 px-6 flex items-center justify-between z-40 shadow-md backdrop-blur-md 
  ${
    scrolled
      ? "border-b border-gray-500/50 transition-all duration-300"
      : "border-b-0"
  }`}
      >
        {/* Logo & Branding */}
        <div className="flex items-right px-auto space-x-2">
          <span className="text-2xl font-semibold tracking-wide  mx-auto">
            <a href="#home">
              Nivedika <span className="text-purple-400">Sharma</span>
            </a>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden ml-auto lg:flex space-x-16 text-lg lg:space-x-8 lg:text-base xl:text-lg xl:space-x-16">
          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#Experience" className="hover:text-white transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#Projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="hidden lg:flex lg:px-4 items-center "></div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed top-16 left-0 w-full bg-[#0a0014] text-white p-2 space-y-4 z-50 shadow-lg">
            <ThemeToggle />
            <ul className="space-y-4 text-center px-6 text-lg">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#Experience" className="hover:text-white transition">
                  Experience
                </a>
              </li>

              <li>
                <a href="#Projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
