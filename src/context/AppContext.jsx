import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart, Star, Plus, Minus, ArrowRight, CheckCircle, Mail, Eye, EyeOff } from 'lucide-react';

// Global State Management
const AppContext = React.createContext();

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Mock Data
const categories = [
  { id: 1, name: 'Racing Tees', slug: 'racing-tees', active: true },
  { id: 2, name: 'Speed Jackets', slug: 'speed-jackets', active: false },
  { id: 3, name: 'Pit Caps', slug: 'pit-caps', active: false },
  { id: 4, name: 'Track Accessories', slug: 'track-accessories', active: false },
  { id: 5, name: 'Limited Edition', slug: 'limited-edition', active: false }
];

const products = [
  {
    id: 1,
    name: 'Monaco GP Victory Tee',
    price: 89,
    image: '/api/placeholder/300/400',
    category: 'racing-tees',
    rating: 4.8,
    reviews: 124,
    colors: ['Black', 'Red', 'White'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Silverstone Racing Tee',
    price: 79,
    image: '/api/placeholder/300/400',
    category: 'racing-tees',
    rating: 4.6,
    reviews: 89,
    colors: ['Black', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: 'Pit Crew Championship Tee',
    price: 94,
    image: '/api/placeholder/300/400',
    category: 'racing-tees',
    rating: 4.9,
    reviews: 156,
    colors: ['Red', 'Black'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Grid Position Vintage Tee',
    price: 69,
    image: '/api/placeholder/300/400',
    category: 'racing-tees',
    rating: 4.5,
    reviews: 67,
    colors: ['White', 'Navy'],
    sizes: ['S', 'M', 'L']
  }
];

// ✅ Define and Export AppProvider
export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const value = {
    cart,
    setCart,
    user,
    setUser,
    categories,
    products
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
