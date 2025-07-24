import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { cart } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-red-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">F1</span>
            </div>
            <span className="font-bold text-xl tracking-tight">VELOCITY</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-red-400 transition-colors">Products</Link>
            <Link to="/about" className="hover:text-red-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-red-600 rounded-lg transition-colors">
              <Heart size={20} />
            </button>
            <Link to="/cart" className="p-2 hover:bg-red-600 rounded-lg transition-colors relative">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="p-2 hover:bg-red-600 rounded-lg transition-colors">
              <User size={20} />
            </Link>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-600">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 px-4 hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/products" className="py-2 px-4 hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/about" className="py-2 px-4 hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="py-2 px-4 hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;