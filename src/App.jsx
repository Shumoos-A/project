import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

// المكونات الرئيسية (Layout Components)
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Footer from "./components/Footer";

// الصفحات (Page Components)
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  // حالة البحث المشتركة بين شريط التنقل والصفحة الرئيسية
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // 1. تغليف التطبيق بالـ Providers لتوفير الحالة (state) لجميع المكونات
    <WishlistProvider>
      <CartProvider>
        {/* 2. BrowserRouter لتفعيل نظام التوجيه (Routing) */}
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gray-50">
            {/* 3. شريط التنقل الرئيسي (يمرر له حالة البحث) */}
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            
            {/* 4. شريط التنقل الثانوي للأقسام */}
            <SecondaryNavbar />

            {/* 5. المحتوى الرئيسي للصفحات */}
            <main className="flex-1">
              <Routes>
                {/* الصفحة الرئيسية */}
                <Route path="/" element={<Home searchQuery={searchQuery} />} />
                
                {/* مسار عام لعرض المنتجات حسب القسم */}
                <Route path="/products/:category" element={<Home searchQuery={searchQuery} />} />
                
                {/* صفحة تفاصيل المنتج (مسار ديناميكي) */}
                <Route path="/product/:slug" element={<ProductDetail />} />
                
                {/* باقي الصفحات */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>

            {/* 6. التذييل (Footer) */}
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

