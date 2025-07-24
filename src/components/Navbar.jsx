import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/tlogo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/classes', label: 'Classes' },
    { to: '/feestructure', label: 'Fee Structure' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/achievements', label: 'Achievements' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-amber-100">
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
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-700 hover:text-red-600 text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}

            <Link to="/contact">
              <button className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-red-700 hover:to-amber-700 transition-all">
                Contact
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            {isMenuOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-4 border-t border-amber-100 bg-white rounded shadow-sm">
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
