import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// أيقونة القلب
const HeartIcon = ({ isFavorite }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors duration-300 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);


export default function ProductCard({ product }) {
    // ✅ إصلاح الخطأ: استدعاء الـ Hooks في بداية المكون
    const { addToCart } = useCart();
    const { toggleWishlistItem, isItemInWishlist } = useWishlist();

    // التحقق مما إذا كان المنتج في المفضلة
    const isFavorite = isItemInWishlist(product.id);
    
    // حساب عدد النجوم بناءً على التقييم
    const filledStars = Math.round(product.rating || 0);

    const handleAddToCart = (e) => {
        e.preventDefault(); // منع الانتقال إلى صفحة المنتج عند الضغط على الزر
        addToCart(product);
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault(); // منع الانتقال إلى صفحة المنتج عند الضغط على القلب
        toggleWishlistItem(product);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group transition-shadow hover:shadow-lg flex flex-col">
            <Link to={`/product/${product.slug}`} className="flex flex-col h-full">
                <div className="relative">
                    <div className="aspect-square w-full overflow-hidden">
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <button 
                        onClick={handleToggleWishlist}
                        className="absolute top-3 right-3 bg-white/80 rounded-full p-2 transition hover:bg-white"
                        aria-label="Toggle Wishlist"
                    >
                        <HeartIcon isFavorite={isFavorite} />
                    </button>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg truncate text-black">{product.name}</h3>
                    
                    {/* ⭐ قسم التقييم (النجوم) */}
                    {product.rating && (
                         <div className="flex items-center my-2">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < filledStars ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                            ))}
                        </div>
                    )}

                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                        {/* 🇮🇶 السعر بالدينار العراقي */}
                        <span className="font-bold text-lg text-black">{product.price}</span>
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