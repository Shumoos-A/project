import { Link } from 'react-router-dom'; // 1. استيراد Link
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Stars({ value = 4.5 }) { /* ... كود النجوم يبقى كما هو ... */ }

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isProductInWishlist = isInWishlist(product.id);

  // 2. هذه الدوال تمنع الانتقال للصفحة عند الضغط على الأزرار الداخلية
  const handleWishlistToggle = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    if (isProductInWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // إذا كان المنتج له خيارات، لا تضيفه للسلة مباشرة من هنا
    if (product.options) {
      alert("Please select options on the product page.");
    } else {
      addToCart(product);
    }
  }

  return (
    // 3. تغليف البطاقة بـ <Link>
    <Link to={`/product/${product.slug}`} className="block group">
      <div className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative">
          <button onClick={handleWishlistToggle} className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:text-red-500 transition">
            {isProductInWishlist ? <FaHeart className="text-red-500" size={20} /> : <FaRegHeart size={20} />}
          </button>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div className="p-4 space-y-2 flex flex-col flex-grow">
          <h3 className="font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 flex-grow">{product.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-bold text-lg text-emerald-600">${product.price}</span>
            <button onClick={handleAddToCart} className="px-4 py-2 text-sm rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}