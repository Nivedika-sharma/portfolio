import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <Link to="/home">
              Nivedika <span className="text-primary">Sharma</span>
            </Link>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden ml-auto lg:flex space-x-14 text-lg lg:space-x-8 lg:text-base xl:text-lg xl:space-x-10">
          <li>
            <Link to="/home" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-white transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/Experience" className="hover:text-white transition">
              Experience
            </Link>
          </li>

          <li>
            <Link to="/Projects" className="hover:text-white transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Skills" className="hover:text-white transition">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/Achievements" className="hover:text-white transition">
              Achievements
            </Link>
          </li>

          <li>
            <Link to="/Contact" className="hover:text-white transition">
              Contact
            </Link>
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
          <div className="lg:hidden fixed top-16 left-0 w-full bg-[/0a0014] text-white p-2 space-y-4 z-50 shadow-lg">
           
            <ul className="space-y-4 text-center px-6 text-lg">
            <li>
              <ThemeToggle />
            </li>
              <li>
                <Link to="/home" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About Me" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/Experience" className="hover:text-white transition">
                  Experience
                </Link>
              </li>

              <li>
                <Link to="/Projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/Skills" className="hover:text-white transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/Achievements" className="hover:text-white transition">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
