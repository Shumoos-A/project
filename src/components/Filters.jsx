import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/products';

const Filters = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 p-6 h-fit sticky top-24 shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Filters</h3>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-xl transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="3000"
            step="50"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-200"
        >
          <option value="name">Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="reviews">Most Popular</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Filters;
