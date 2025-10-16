// src/data/products.js
export const products = [
  // == Fashion Products ==
  {
  id: 101,
  slug: "summer-casual-dress",
  name: "Summer Casual Dress",
  category: "Fashion",
  subcategory: "Dresses",
  gender: "Womenswear",
  price: "75.00 IQD",
  images: ["..."],
  description: "A light and comfortable dress perfect for summer.",
  rating: 4.5,
  reviewCount: 40,
  // ✅ يجب أن تضيف هذه القيم هنا لكي يعمل الفلتر
  tags: ["Casual Wear", "Summer Collection", "White"]
},
  
  // == Makeup Products ==
  {
    id: 2,
    slug: "matte-red-lipstick",
    name: "Matte Red Lipstick",
    category: "Makeup",
    subcategory: "Lipstick",
    brand: "Evola Beauty",
    price: "25.00 IQD",
    // ✅ تم تغيير رابط الصورة هنا برابط جديد وموثوق
    images: ["https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"],
    description: "A long-lasting, vibrant matte lipstick in classic red.",
    rating: 4.8,
    reviewCount: 120,
    tags: ["Matte", "Red"]
  },

  // == Fragrances Products ==
  {
    id: 3,
    slug: "eau-de-parfum-floral",
    name: "Eau de Parfum - Floral",
    category: "Fragrances",
    subcategory: "Eau de Parfum",
    gender: "Women",
    price: "95.00 IQD",
    // ✅ تم تغيير رابط الصورة هنا برابط جديد وموثوق
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"],
    description: "A captivating floral fragrance with notes of jasmine and rose.",
    rating: 4.9,
    reviewCount: 210,
    tags: ["Floral"]
  },

  // == Furniture Products ==
  {
    id: 7,
    slug: "mid-century-sofa",
    name: "Mid-Century Modern Sofa",
    category: "Furniture",
    subcategory: "Sofas",
    price: "899.00 IQD",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"],
    description: "A stylish sofa that brings a touch of mid-century modern design.",
    rating: 4.7,
    reviewCount: 102,
    tags: ["Gray", "fabric"]
  },

  // == Jewelry Product ==
  {
    id: 5,
    slug: "silver-moon-necklace",
    name: "Silver Moon Necklace",
    category: "Jewelry",
    subcategory: "Necklaces",
    material: "Silver",
    price: "120.00 IQD",
    images: ["https://images.unsplash.com/photo-1611652033959-8a3d4aa0e525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"],
    description: "A delicate and elegant sterling silver necklace.",
    rating: 4.9,
    reviewCount: 88,
    tags: ["Elegant", "Minimalist"]
  }
];