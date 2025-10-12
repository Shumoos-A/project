import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

// Components
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout"; // You can add this later

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SecondaryNavbar />

            <main className="flex-1">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home searchQuery={searchQuery} />} />
                <Route path="/products/:category" element={<Home searchQuery={searchQuery} />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                
                {/* User Routes */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/login" element={<Login />} />
                
                {/* Static Pages Routes */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                { <Route path="/checkout" element={<Checkout />} /> }

              </Routes>
            </main>
            
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}
