import { useState, useEffect } from 'react'; // 1. استيراد Hooks جديدة
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// --- مكون التنبيه ---
function Notification({ message, onClear }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => onClear(), 3000); // إخفاء التنبيه بعد 3 ثوانٍ
      return () => clearTimeout(timer);
    }
  }, [message, onClear]);

  if (!message) return null;

  return (
    <div className="fixed top-24 right-5 bg-white text-black border border-gray-200 shadow-xl rounded-lg px-6 py-4 z-50">
      <span className="font-semibold">{message}</span>
    </div>
  );
}
// --- نهاية مكون التنبيه ---


export default function Wishlist() {
  const { wishlistItems } = useWishlist();
  const [notification, setNotification] = useState(''); // 2. حالة لتخزين رسالة التنبيه

  return (
    <div className="bg-white min-h-screen">
      {/* إضافة مكون التنبيه هنا */}
      <Notification message={notification} onClear={() => setNotification('')} />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
          <p className="mt-2 text-gray-500">
            You have {wishlistItems.length} item(s) saved for later.
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                // 3. تمرير دالة إظهار التنبيه إلى كرت المنتج
                showNotification={setNotification} 
              />
            ))}
          </div>
        ) : (
          // تحسين تصميم قسم القائمة الفارغة
          <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-lg font-semibold text-gray-700">Your Wishlist is Empty</p>
            <p className="text-gray-500 mt-1">Add items you love to save them for later.</p>
            <Link 
              to="/" 
              className="mt-6 inline-block bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition"
            >
              Discover Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}