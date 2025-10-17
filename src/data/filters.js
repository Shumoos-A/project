// src/data/filters.js
export const filterConfig = {
  fashion: [
    {
      label: "Category",
      key: "subcategory", // هذا المفتاح صحيح
      options: ["Dresses", "Bags", "Shoes", "Complete Sets", "T-Shirts", "Boot", "WristWatch", "Sunglasses", "Slippers"]
    },
    {
      label: "Style",
      key: "style", // ✅ تم تغيير المفتاح هنا
      options: ["Classic Styles", "Casual Wear"]
    },
    {
      label: "Collection",
      key: "collection", // ✅ تم تغيير المفتاح هنا
      options: ["Summer Collection", "Winter Essentials"]
    },
    {
      label: "Gender",
      key: "gender", // هذا المفتاح صحيح
      options: ["Womenswear", "Menswear"]
    },
    {
      label: "Color",
      key: "color", // ✅ تم تغيير المفتاح هنا
      options: ["Black", "Red", "Blue", "Brown", "Golden", "White", "Beige", "Green", "Pink", "Gray"]
    }
  ],
  // ... باقي الأقسام تبقى كما هي
  makeup: [
    { label: "Product Type", key: "subcategory", options: ["Lipstick", "Foundation", "Eyeshadow"] },
    { label: "Brand", key: "brand", options: ["Evola Beauty", "Chanel", "Dior"] },
    { label: "Finish", key: "tags", options: ["Matte", "Glossy"] }
  ],
  fragrances: [
    { label: "For", key: "gender", options: ["Women", "Men", "Unisex"] },
    { label: "Fragrance Family", key: "tags", options: ["Floral", "Woody", "Citrus"] },
    { label: "Concentration", key: "subcategory", options: ["Eau de Parfum", "Eau de Toilette"] }
  ],
  furniture: [
    { label: "Type", key: "subcategory", options: ["Light", "Chairs", "Tables"] },
    { label: "Color", key: "tags", options: ["Gray", "Beige", "White", "Black", "Yellow"] }
  ],
  jewelry: [
    { label: "Material", key: "material", options: ["Gold", "Silver", "Diamond"] },
    { label: "Type", key: "subcategory", options: ["Necklaces", "Rings", "Bracelets"] }
  ],
};