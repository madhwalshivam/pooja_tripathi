import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/classes', label: 'Classes' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/achievements', label: 'Achievements' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white text-sm font-medium px-4 py-2 rounded-full border border-transparent bg-black/15 backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-600"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="text-white text-sm font-medium px-4 py-2 rounded-full border border-transparent bg-black/15 backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-600">
                Contact
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-600"
          >
            {isMenuOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100 bg-white shadow-md">
            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 text-sm font-medium transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-red-600 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-red-700 hover:to-amber-700 transition-all"
                >
                  Contact
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


