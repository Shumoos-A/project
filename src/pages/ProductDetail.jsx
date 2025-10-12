

import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Reviews from "../components/Reviews"; // استيراد مكون التعليقات

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug);

  // حالة لتتبع الصورة الرئيسية المعروضة
  const [mainImage, setMainImage] = useState('');
  // حالة لتتبع الخيار المحدد (مثل المقاس)
  const [selectedOption, setSelectedOption] = useState(null);
  // حالة لعرض إشعار الإضافة للسلة
  const [notification, setNotification] = useState('');

  // هذا التأثير يضمن تحديث الصورة الرئيسية عند تحميل المنتج
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // في حال لم يتم العثور على المنتج
  if (!product) {
    return <div className="text-center py-20 font-bold text-2xl">Product not found!</div>;
  }
  
  // دالة لإضافة المنتج إلى السلة
  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      cartItemId: product.id + '-' + (selectedOption || ''), 
      selectedOption: selectedOption
    };
    addToCart(itemToAdd);
    setNotification(`${product.name} ${selectedOption ? `(${selectedOption})` : ''} added to cart!`);
    // إخفاء الإشعار بعد 3 ثوانٍ
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* إشعار الإضافة إلى السلة */}
      {notification && (
        <div className="fixed top-24 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {notification}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* قسم معرض الصور */}
        <div>
          <div className="aspect-square overflow-hidden rounded-2xl shadow-lg mb-4 bg-gray-100">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-300" 
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {product.images && product.images.map((img, index) => (
              <div 
                key={index} 
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition ${mainImage === img ? 'border-gray-900' : 'border-transparent'}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* قسم تفاصيل المنتج والخيارات */}
        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          <p className="text-3xl font-semibold text-emerald-600">${product.price}</p>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          
          {product.options && (
            <div className="pt-4">
              <h3 className="text-md font-semibold text-gray-800 mb-3">{product.options.title}:</h3>
              <div className="flex flex-wrap gap-3">
                {product.options.values.map(value => (
                  <button 
                    key={value}
                    onClick={() => setSelectedOption(value)}
                    className={`px-6 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${selectedOption === value 
                      ? 'bg-gray-900 text-white border-gray-900 scale-105' 
                      : 'bg-white hover:bg-gray-100 border-gray-300'}`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={handleAddToCart}
            disabled={product.options && !selectedOption}
            className="w-full h-14 mt-6 text-lg rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 active:scale-95 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* فاصل مرئي */}
      <hr className="my-12 border-t-2 border-gray-200" />
      
      {/* قسم التعليقات والتقييمات */}
      {product && <Reviews productId={product.id} />}
    </div>
  );
}

