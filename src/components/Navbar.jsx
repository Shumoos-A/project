import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiSearch, FiHeart, FiUser, FiShoppingCart } from 'react-icons/fi';

// 1. استقبل دالة التحديث وقيمة البحث كـ props
export default function Navbar({ searchQuery, setSearchQuery }) {
  const { cart } = useCart();
  const count = cart.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-gray-800 tracking-wide">
            Evola
          </Link>
        </div>
        <div className="flex-1 flex justify-center px-6 lg:px-8">
          <div className="w-full max-w-lg relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch size={20} />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-10 pl-10 pr-4 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
              // 2. اربط القيمة ودالة التحديث بمربع البحث
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/wishlist" className="text-gray-600 hover:text-gray-900 transition-colors">
            <FiHeart size={24} />
          </Link>
          <NavLink to="/cart" className="text-gray-600 hover:text-gray-900 transition-colors relative">
            <FiShoppingCart size={24} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </NavLink>
          <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
            <FiUser size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}