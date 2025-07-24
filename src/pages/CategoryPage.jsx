import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { products } from "../data";


const CategoryPage = () => {
  const { addToCart } = useAppContext();
  const categoryProducts = products.filter(p => p.category === 'racing-tees');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <nav className="text-sm breadcrumbs mb-6">
          <Link to="/" className="text-red-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Racing Tees</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Racing Tees</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
