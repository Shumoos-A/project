import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

// دالة لقراءة المفضلة من الذاكرة الدائمة للمتصفح
const getInitialWishlist = () => {
  try {
    const savedWishlist = localStorage.getItem('wishlist');
    // إذا كانت هناك بيانات محفوظة، قم بتحويلها من نص إلى كائن، وإلا أرجع مصفوفة فارغة
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error("Failed to parse wishlist from localStorage", error);
    return [];
  }
};

export function WishlistProvider({ children }) {
  // 1. ابدأ الحالة بالبيانات المحفوظة بدلاً من مصفوفة فارغة
  const [wishlist, setWishlist] = useState(getInitialWishlist);

  // 2. هذا التأثير (Effect) سيتم تشغيله في كل مرة تتغير فيها قائمة المفضلة
  useEffect(() => {
    try {
      // قم بحفظ النسخة المحدثة من المفضلة في الذاكرة الدائمة
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage", error);
    }
  }, [wishlist]); // يتم تشغيله فقط عند تغيير `wishlist`

  const addToWishlist = (product) => {
    // أضف المنتج فقط إذا لم يكن موجودًا بالفعل
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);