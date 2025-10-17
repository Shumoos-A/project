import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { cart } = useCart();
  const { wishlistItems } = useWishlist();

  const cartItemCount = cart?.reduce((total, item) => total + item.qty, 0) || 0;
  const wishlistItemCount = wishlistItems?.length || 0;

  const categories = [
    { name: "All Products", path: "/products/all" },
    { name: "Fashion", path: "/products/fashion" },
    { name: "Jewelry", path: "/products/jewelry" },
    { name: "Makeup", path: "/products/makeup" },
    { name: "Fragrances", path: "/products/fragrances" },
    { name: "Furniture", path: "/products/furniture" },
    
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gray-800 text-white font-bold text-lg rounded-md w-7 h-7 flex items-center justify-center">E</div>
            <span className="text-gray-800 text-xl font-serif font-semibold">Evola</span>
          </NavLink>

          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={category.path}
                className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid black" : "none",
                  color: isActive ? "black" : "#4B5563",
                })}
              >
                {category.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-1 text-gray-700 hover:text-black transition">
                <Search className="h-5 w-5" />
              </button>
              <NavLink to="/login" className="p-1 text-gray-700 hover:text-black transition">
                <User className="h-5 w-5" />
              </NavLink>

              {/* ✅ هذا هو الجزء الذي يربط أيقونة القلب بصفحة المفضلة */}
              <NavLink to="/wishlist" className="relative p-1 text-gray-700 hover:text-black transition">
                <Heart className="h-5 w-5" />
                {wishlistItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlistItemCount}</span>
                )}
              </NavLink>
              
              <NavLink to="/cart" className="relative p-1 text-gray-700 hover:text-black transition">
                <ShoppingBag className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>
                )}
              </NavLink>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 text-gray-700 hover:text-black transition">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {searchOpen && (
          <form onSubmit={handleSearch} className="py-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all w-full"
              autoFocus
            />
          </form>
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={category.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#F3F4F6" : "",
                  color: isActive ? "black" : "",
                })}
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}