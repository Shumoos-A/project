import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Reviews from "../components/Reviews";

// أيقونة القلب
const HeartIcon = ({ isFavorite }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors duration-300 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

// أيقونة سهم التنقل
const ChevronIcon = ({ direction = 'left' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} /></svg>
);

export default function ProductDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toggleWishlistItem, isItemInWishlist } = useWishlist();

    const product = products.find(p => p.slug === slug);
    const currentIndex = products.findIndex(p => p.slug === slug);

    const [mainImage, setMainImage] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const [notification, setNotification] = useState('');
    const [showCommentSection, setShowCommentSection] = useState(false);

    const isFavorite = product ? isItemInWishlist(product.id) : false;

    useEffect(() => {
        if (product?.images?.length > 0) {
            setMainImage(product.images[0]);
            setSelectedSize(null);
        }
        // Scroll to top when product changes
        window.scrollTo(0, 0);
    }, [product]);

    if (!product) {
        return <div className="text-center py-20 font-bold text-2xl">Product not found!</div>;
    }
    
    const filledStars = Math.round(product.rating || 0);

    const handleAddToCart = () => {
        if (product.options && !selectedSize) {
            setNotification('Please select a size!');
            setTimeout(() => setNotification(''), 3000);
            return;
        }
        // Note: The addToCart function from your new CartContext might behave differently
        // This is based on the logic we built. Adjust if needed.
        const itemToAdd = { ...product, cartItemId: `${product.id}-${selectedSize || ''}`, selectedOption: selectedSize };
        addToCart(itemToAdd);
        setNotification(`${product.name} added to cart!`);
        setTimeout(() => setNotification(''), 3000);
    };

    const handleToggleWishlist = () => {
        toggleWishlistItem(product);
        const notificationMessage = isFavorite ? `${product.name} removed from wishlist!` : `${product.name} added to wishlist!`;
        setNotification(notificationMessage);
        setTimeout(() => setNotification(''), 3000);
    };

    const goToNextProduct = () => {
        const nextProduct = products[currentIndex + 1];
        if (nextProduct) navigate(`/product/${nextProduct.slug}`);
    };

    const goToPreviousProduct = () => {
        const previousProduct = products[currentIndex - 1];
        if (previousProduct) navigate(`/product/${previousProduct.slug}`);
    };

    return (
        <div className="bg-white text-black font-sans">
            {currentIndex > 0 && (
                <button onClick={goToPreviousProduct} className="fixed top-0 left-0 z-30 h-full px-2 sm:px-4 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors" aria-label="Previous product"><ChevronIcon direction="left" /></button>
            )}
            {currentIndex < products.length - 1 && (
                <button onClick={goToNextProduct} className="fixed top-0 right-0 z-30 h-full px-2 sm:px-4 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors" aria-label="Next product"><ChevronIcon direction="right" /></button>
            )}

            {notification && (<div className="fixed top-24 right-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">{notification}</div>)}

            <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-8">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className="flex flex-col gap-4">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-5 gap-3">
                            {product.images?.slice(0, 5).map((img, index) => (
                                <div key={index} className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition ${mainImage === img ? 'border-black' : 'border-gray-200'}`} onClick={() => setMainImage(img)}>
                                    <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <p className="text-lg font-semibold text-gray-700">{product.brand}</p>
                            <h1 className="text-3xl sm:text-4xl font-bold text-black">{product.name}</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < filledStars ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                                    ))}
                                </div>
                                {product.reviewCount && (<span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>)}
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-black">{product.price}</p>
                        <hr className="border-gray-200" />
                        {product.description && (
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            </div>
                        )}
                        {product.options && (
                            <div>
                                <h3 className="font-semibold mb-2">{product.options.title}:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.options.values.map(value => (
                                        <button key={value} onClick={() => setSelectedSize(value)} className={`px-5 py-2.5 border rounded-md font-medium transition-all duration-200 text-sm ${selectedSize === value ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-black'}`}>{value}</button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex gap-4 mt-4">
                            <button onClick={handleAddToCart} disabled={product.options && !selectedSize} className="flex-grow h-14 text-base rounded-lg bg-black text-white font-bold hover:bg-gray-800 active:scale-95 transition disabled:bg-gray-400 disabled:cursor-not-allowed">Add to cart</button>
                            <button onClick={handleToggleWishlist} className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-lg hover:border-black transition" aria-label="Toggle Wishlist">
                                <HeartIcon isFavorite={isFavorite} />
                            </button>
                        </div>
                        <button onClick={() => setShowCommentSection(!showCommentSection)} className="w-full h-12 mt-2 text-base rounded-lg border border-gray-300 text-black font-semibold hover:bg-gray-100 active:scale-95 transition">{showCommentSection ? 'Hide Comments' : 'Customer Reviews'}</button>
                        {showCommentSection && <div className="mt-4"><Reviews productId={product.id} /></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}