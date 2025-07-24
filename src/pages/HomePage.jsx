import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from "../context/AppContext";
 // Adjust the path as per your project structure
import { products, categories } from '../data'; // Replace with actual paths
import ProductCard from '../components/ProductCard'; // Replace with actual path

const HomePage = () => {
  const navigate = useNavigate();
  const { addToCart } = useAppContext();

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/api/placeholder/1920/1080)',
            backgroundAttachment: 'fixed',
          }}
        ></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            RACE THE
            <span className="block text-red-500">STREETS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Premium F1-inspired streetwear for champions
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/products')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative h-64 rounded-lg overflow-hidden cursor-pointer group ${
                  category.active ? 'hover:shadow-xl' : 'opacity-60'
                }`}
                onClick={() =>
                  category.active && navigate(`/category/${category.slug}`)
                }
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <img
                  src="/api/placeholder/300/400"
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  {category.active && (
                    <p className="text-sm text-gray-300">Explore Collection</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
