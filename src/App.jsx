// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import SearchResultsPage from "./pages/SearchResultsPage"; // <-- استيراد صفحة البحث

export default function App() {
  // ✅ تم حذف حالة البحث من هنا لأنها لم تعد ضرورية
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar /> {/* ✅ لم نعد بحاجة لتمرير props البحث */}

            <main className="flex-1">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                {/* ملاحظة: تم تبسيط المسار ليعتمد على صفحة Home لعرض كل الفئات */}
                <Route path="/products/:category" element={<Home />} /> 
                <Route path="/product/:slug" element={<ProductDetail />} />
                
                {/* ✅ المسار الجديد لصفحة نتائج البحث */}
                <Route path="/search" element={<SearchResultsPage />} />

                {/* User Routes */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />

                {/* Static Pages Routes */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}