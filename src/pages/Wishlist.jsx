import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // استيراد كرت المنتج

export default function Wishlist() {
  // جلب قائمة المفضلة من الـ context
  const { wishlistItems, toggleWishlistItem } = useWishlist();

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
          <p className="mt-2 text-gray-500">
            You have {wishlistItems.length} item(s) in your wishlist.
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          // إذا كانت القائمة تحتوي على منتجات، قم بعرضها
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          // إذا كانت القائمة فارغة
          <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-lg text-gray-500">Your wishlist is currently empty.</p>
            <Link 
              to="/" 
              className="mt-6 inline-block bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}