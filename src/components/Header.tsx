import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useApp();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">Eloquence</span>
              <span className="text-gray-900 dark:text-white text-2xl font-bold">AI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" active={isActive('/')} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/video-call" active={isActive('/video-call')} onClick={closeMenu}>
              Video Call
            </NavLink>
            <NavLink to="/languages" active={isActive('/languages')} onClick={closeMenu}>
              Languages
            </NavLink>
            <NavLink to="/contact" active={isActive('/contact')} onClick={closeMenu}>
              Contact
            </NavLink>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <button className="btn-primary">
              Sign Up
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
        >
          <div className="px-4 py-2 space-y-1">
            <MobileNavLink to="/" active={isActive('/')} onClick={closeMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/video-call" active={isActive('/video-call')} onClick={closeMenu}>
              Video Call
            </MobileNavLink>
            <MobileNavLink to="/languages" active={isActive('/languages')} onClick={closeMenu}>
              Languages
            </MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')} onClick={closeMenu}>
              Contact
            </MobileNavLink>
            <div className="pt-2">
              <button className="w-full btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        active
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
        active
          ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;