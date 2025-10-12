
import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Evola</h3>
            <p className="text-gray-400">
              Curated collections of premium products for a modern lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/products/all" className="text-gray-400 hover:text-white transition">All Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/products/fashion" className="text-gray-400 hover:text-white transition">Fashion</Link></li>
              <li><Link to="/products/jewelry" className="text-gray-400 hover:text-white transition">Jewelry</Link></li>
              <li><Link to="/products/furniture" className="text-gray-400 hover:text-white transition">Furniture</Link></li>
              <li><Link to="/products/flowers" className="text-gray-400 hover:text-white transition">Flowers</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
           <div className="md:col-span-1">
             <h4 className="font-semibold text-lg mb-4">Contact</h4>
             <ul className="space-y-3 text-gray-400">
               <li className="flex items-start"><FiMapPin className="mr-3 mt-1 flex-shrink-0" /> 123 Fashion Ave, Commerce City</li>
               <li className="flex items-start"><FiPhone className="mr-3 mt-1 flex-shrink-0" /> +1 (234) 567-890</li>
               <li className="flex items-start"><FiMail className="mr-3 mt-1 flex-shrink-0" /> support@sh-elitestore.com</li>
             </ul>
           </div>

        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Evola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
