import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart } from 'lucide-react'; // استيراد أيقونة القلب

export default function ProductCard({ product, showNotification }) {
  const { addToCart } = useCart();
  const { toggleWishlistItem, isItemInWishlist } = useWishlist();

  // التحقق من صلاحية المنتج لتجنب أي خطأ
  if (!product || !product.id) {
    return null; // لا تعرض أي شيء إذا كان المنتج غير صالح
  }
  
  const isFavorite = isItemInWishlist(product.id);
  const filledStars = Math.round(product.rating || 0);

  // دالة الإضافة للسلة (مع نظام التنبيهات)
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (product.category === 'Fashion' || product.subcategory === 'Shoes') {
      if (showNotification) {
        showNotification('Please select a size on the product page.');
      }
    } else {
      addToCart(product);
      if (showNotification) {
        showNotification(`${product.name} added to cart!`);
      }
    }
  };
  
  // دالة إضافة/إزالة من المفضلة
  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlistItem(product);
  };
  
  // دالة آمنة لعرض السعر
  const formatPrice = (price) => {
    const numericPrice = Number(price);
    if (!isNaN(numericPrice)) {
      return `${numericPrice.toFixed(2)} IQD`;
    }
    return "N/A"; // قيمة احتياطية في حال كان السعر غير صالح
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group transition-shadow hover:shadow-lg flex flex-col">
      <Link to={`/product/${product.slug}`} className="flex flex-col h-full">
        
        {/* ✅ تم إرجاع قسم الصورة وأيقونة القلب هنا */}
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden bg-gray-100">
            <img
              src={product.images?.[0] || 'https://placehold.co/400x400'}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 bg-white/80 rounded-full p-2 transition hover:bg-white"
            aria-label="Toggle Wishlist"
          >
            <Heart size={20} className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-500'} />
          </button>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg truncate text-black">{product.name}</h3>
          
          {product.rating && (
            <div className="flex items-center my-2">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < filledStars ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
            </div>
          )}

          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>
          
          <div className="mt-auto flex items-center justify-between">
            <span className="font-bold text-lg text-black">{formatPrice(product.price)}</span>
            <button 
              onClick={handleAddToCart}
              className="px-4 py-1.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}