
import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white  text-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
 <div className="flex items-center space-x-2">
            <div className="bg-gray-800 text-white font-bold text-lg rounded-md w-7 h-7 flex items-center justify-center">
              E
            </div>
            <span className="text-black text-xl font-serif font-semibold">
              Evola
            </span>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-black hover:text-gray-600 transition">Home</Link></li>
              <li><Link to="/products/all" className="text-black hover:text-gray-600 transition">All Products</Link></li>
              <li><Link to="/about" className="text-black hover:text-gray-600 transition">About Us</Link></li>
              <li><Link to="/contact" className="text-black hover:text-gray-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/products/fashion" className="text-black hover:text-gray-600 transition">Fashion</Link></li>
              <li><Link to="/products/jewelry" className="text-black hover:text-gray-600 transition">Jewelry</Link></li>
<li><Link to="/products/Makeup" className="text-black hover:text-gray-600 transition">Makeup</Link></li>
<li><Link to="/products/Fregrances" className="text-black hover:text-gray-600 transition">Fregrances</Link></li>
              <li><Link to="/products/furniture" className="text-black hover:text-gray-600 transition">Furniture</Link></li>
              
            </ul>
          </div>
          
          {/* Contact Info */}
           <div className="md:col-span-1">
             <h4 className="font-semibold text-lg mb-4">Contact</h4>
             <ul className="space-y-3 text-black">
               <li className="flex items-start"><FiMapPin className="mr-3 mt-1 flex-shrink-0" /> Iraq , Basra </li>
               <li className="flex items-start"><FiPhone className="mr-3 mt-1 flex-shrink-0" /> +964 780-000-000</li>
               <li className="flex items-start"><FiMail className="mr-3 mt-1 flex-shrink-0" /> support@sh-Evolastore.com</li>
             </ul>
           </div>

        </div>
        <div className="mt-8 pt-8 border-t border-text-black   text-center ">
          <p>&copy; {new Date().getFullYear()} Evola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
