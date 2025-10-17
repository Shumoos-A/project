import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Reviews from "../components/Reviews"; // تأكد من أن هذا المكون موجود

// --- مكون أسهم التنقل ---
const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`fixed top-1/2 z-30 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-opacity disabled:opacity-0 ${
      direction === 'left' ? 'left-4' : 'right-4'
    }`}
    aria-label={direction === 'left' ? 'Previous Product' : 'Next Product'}
  >
    {direction === 'left' ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
  </button>
);

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const currentIndex = product ? products.findIndex((p) => p.id === product.id) : -1;

  const { addToCart } = useCart();
  const { toggleWishlistItem, isItemInWishlist } = useWishlist();

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [notification, setNotification] = useState("");
  const [showReviews, setShowReviews] = useState(false);

  const isFavorite = product ? isItemInWishlist(product.id) : false;

  let availableSizes = [];
  const clothingSubcategories = ["Dresses", "T-Shirts", "Complete Sets"];
  const shoeSubcategories = ["Shoes", "Boot", "Slippers"];

  if (product && clothingSubcategories.includes(product.subcategory)) {
    availableSizes = ["S", "M", "L", "XL"];
  } else if (product && shoeSubcategories.includes(product.subcategory)) {
    availableSizes = [36, 37, 38, 39, 40, 41];
  }

  useEffect(() => {
    if (product?.images) setMainImage(product.images[0]);
    setSelectedSize(null);
    setShowReviews(false);
    window.scrollTo(0, 0);
  }, [product]);
  
  const goToNextProduct = () => {
    if (currentIndex < products.length - 1) navigate(`/product/${products[currentIndex + 1].slug}`);
  };

  const goToPreviousProduct = () => {
    if (currentIndex > 0) navigate(`/product/${products[currentIndex - 1].slug}`);
  };

  const handleAddToCart = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      setNotification("Please select a size first!");
      setTimeout(() => setNotification(""), 3000);
      return;
    }
    const itemToAdd = { ...product, id: `${product.id}-${selectedSize || ''}`, selectedSize };
    addToCart(itemToAdd);
    setNotification(`${product.name} ${selectedSize ? `(Size: ${selectedSize})` : ''} added to cart!`);
    setTimeout(() => setNotification(""), 3000);
  };

  if (!product) {
    return <div className="text-center py-20 font-bold text-2xl">Product not found!</div>;
  }

  const filledStars = Math.round(product.rating || 0);

  return (
    <div className="bg-white">
      <ArrowButton direction="left" onClick={goToPreviousProduct} disabled={currentIndex <= 0} />
      <ArrowButton direction="right" onClick={goToNextProduct} disabled={currentIndex >= products.length - 1} />

      {notification && (
        <div className="fixed top-24 right-5 bg-black text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in-right">
          {notification}
        </div>
      )}
      
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ✅ تم إرجاع قسم الصور بالكامل */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img src={mainImage || product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.images?.map((img, index) => (
                <div key={index} className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition ${mainImage === img ? 'border-black' : 'border-gray-200'}`} onClick={() => setMainImage(img)}>
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ✅ تم إرجاع قسم تفاصيل المنتج بالكامل */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-lg font-semibold text-gray-700">{product.brand}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-black">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">{[...Array(5)].map((_, i) => <span key={i} className={i < filledStars ? 'text-yellow-400' : 'text-gray-300'}>★</span>)}</div>
                {product.reviewCount && <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>}
              </div>
            </div>
            <p className="text-3xl font-bold text-black">{product.price.toFixed(2)} IQD</p>
            <hr className="border-gray-200" />
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            
            {availableSizes.length > 0 && (
              <div className="pt-2">
                <h3 className="font-semibold text-gray-800 mb-3">Size: <span className="font-normal text-gray-600">{selectedSize || 'Select a size'}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 border rounded-lg font-medium transition-all duration-200 text-md ${
                        selectedSize === size ? 'bg-black text-white' : 'bg-white text-black hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                disabled={availableSizes.length > 0 && !selectedSize}
                className="flex-grow h-14 text-lg rounded-lg bg-black text-white font-bold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Add to cart
              </button>
              <button
                onClick={() => toggleWishlistItem(product)}
                className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-lg hover:border-black transition"
              >
                <Heart size={20} className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'} />
              </button>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setShowReviews(!showReviews)}
                className="w-full h-14 text-lg rounded-lg border border-gray-300 text-black font-semibold hover:bg-gray-100 transition"
              >
                {showReviews ? 'Hide Reviews' : 'Customer Reviews'}
              </button>
            </div>
          </div>
        </div>

        {showReviews && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Reviews productId={product.id} />
          </div>
        )}
      </div>
    </div>
  );
}