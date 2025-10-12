// src/data/products.js

export const products = [
  // == Fashion Products ==
  {
    id: 1,
    slug: "summer-floral-dress",
    name: "Summer Floral Dress",
    category: "Fashion",
    gender: "womenswear",
    subcategory: "Dresses",
    season: "summer",
    price: 75.00,
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
    ],
    description: "A light and breezy floral dress, perfect for summer days.",
    rating: 4.7,
    tags: ["summer-collection", "red"],
    options: { title: "Size", values: ["S", "M", "L"] }
  },
  {
    id: 2,
    slug: "high-waist-denim-jeans",
    name: "High-Waist Denim Jeans",
    category: "Fashion",
    gender: "womenswear",
    subcategory: "Jeans",
    season: "all-season",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1604176354204-926873782855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    ],
    description: "Classic high-waist jeans that offer a flattering fit and timeless style.",
    rating: 4.8,
    tags: ["classic-styles", "blue"],
    options: { title: "Size", values: ["26", "28", "30", "32"] }
  },
   {
    id: 3,
    slug: "classic-leather-jacket-m",
    name: "Classic Leather Jacket",
    category: "Fashion",
    gender: "menswear",
    subcategory: "Jackets",
    season: "all-season",
    price: 189.99,
    images: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1603217041444-938b3d100b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    ],
    description: "A timeless leather jacket made from premium quality leather.",
    rating: 4.8,
    tags: ["classic-styles", "black"],
    options: { title: "Size", values: ["M", "L", "XL"] }
  },
  {
    id: 15,
    slug: "cozy-winter-sweater-w",
    name: "Cozy Winter Sweater",
    category: "Fashion",
    gender: "womenswear",
    subcategory: "Sweaters",
    season: "winter",
    price: 110.00,
    images: [
      "https://images.unsplash.com/photo-1608494603683-c2a86a6e5b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1611094603957-3a1c6a7b0a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Stay warm with this incredibly soft cashmere blend sweater.",
    rating: 4.9,
    tags: ["winter-essentials", "beige"],
    options: { title: "Size", values: ["S", "M", "L", "XL"] }
  },
  {
    id: 4,
    slug: "slim-fit-chino-pants-m",
    name: "Slim-Fit Chino Pants",
    category: "Fashion",
    gender: "menswear",
    subcategory: "Pants",
    season: "summer",
    price: 65.50,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Versatile and comfortable slim-fit chinos for any occasion.",
    rating: 4.6,
    tags: ["summer-collection", "khaki"],
    options: { title: "Waist", values: ["30", "32", "34", "36"] }
  },

  // == Jewelry Products ==
  {
    id: 5,
    slug: "silver-moon-necklace",
    name: "Silver Moon Necklace",
    category: "Jewelry",
    material: "Silver",
    price: 120.00,
    images: [
      "https://images.unsplash.com/photo-1611652033959-8a3d4aa0e525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1617038220319-c5a94cf34da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "A delicate and elegant sterling silver necklace.",
    rating: 4.9,
  },
  
  // == Furniture Products (UPDATED & EXPANDED) ==
  {
    id: 7,
    slug: "mid-century-sofa",
    name: "Mid-Century Modern Sofa",
    category: "Furniture",
    subcategory: "Sofas",
    price: 899.00,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "A stylish sofa that brings a touch of mid-century modern design.",
    rating: 4.7,
    tags: ["gray", "fabric"]
  },
  {
    id: 9,
    slug: "wooden-dining-chair",
    name: "Wooden Dining Chair",
    category: "Furniture",
    subcategory: "Chairs",
    price: 125.00,
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "A beautifully crafted wooden chair, perfect for your dining area.",
    rating: 4.8,
    tags: ["brown", "wood"]
  },
  {
    id: 11,
    slug: "modern-black-desk",
    name: "Modern Black Desk",
    category: "Furniture",
    subcategory: "Tables",
    price: 320.00,
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=787&q=80"
    ],
    description: "A sleek and minimalist black desk, perfect for a modern home office.",
    rating: 4.8,
    tags: ["black", "wood"]
  },
  {
    id: 12,
    slug: "white-lounge-chair",
    name: "White Lounge Chair",
    category: "Furniture",
    subcategory: "Chairs",
    price: 275.00,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "A comfortable and stylish white lounge chair to complete your living space.",
    rating: 4.7,
    tags: ["white", "fabric"]
  },

  // == Flowers Products ==
  {
    id: 8,
    slug: "red-rose-bouquet",
    name: "Red Rose Bouquet",
    category: "Flowers",
    subcategory: "Roses",
    price: 55.00,
    images: [
      "https://images.unsplash.com/photo-1580422055931-b9b53278546b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "A classic bouquet of one dozen long-stemmed red roses.",
    rating: 4.9,
    tags: ["red", "bouquet"]
  },
  {
    id: 10,
    slug: "yellow-tulip-arrangement",
    name: "Yellow Tulip Arrangement",
    category: "Flowers",
    subcategory: "Tulips",
    price: 45.00,
    images: [
      "https://images.unsplash.com/photo-1520782222383-b93b708b3c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "A bright and cheerful arrangement of fresh yellow tulips.",
    rating: 4.7,
    tags: ["yellow", "arrangement"]
  }
];
