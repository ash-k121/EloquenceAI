import { Link, useLocation } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-10 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2 text-blue-600 font-semibold group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mic size={24} className="text-blue-600" />
              </motion.div>
              <span className="text-xl group-hover:text-blue-700 transition-colors">EloquenceAI</span>
            </Link>
          </motion.div>
          
          <nav className="flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/video-call" current={location.pathname === "/video-call"}>
              Video Call
            </NavLink>
            <NavLink to="/languages" current={location.pathname === "/languages"}>
              Languages
            </NavLink>
            <NavLink to="/contact" current={location.pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  current: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, current, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
        current
          ? 'text-blue-600'
          : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      {children}
      {current && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

export default Header;