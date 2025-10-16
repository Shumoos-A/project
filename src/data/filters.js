// src/data/filters.js
export const filterConfig = {
  fashion: [
    {
      label: "Category",
      key: "subcategory",
      // تمت إضافة "Complete Sets" (تنسيقات جاهزة)
      options: ["Dresses", "Jackets", "Bags", "Shoes", "Complete Sets", "T-Shirts", "Pants"]
    },
    {
      label: "Style", // فلتر جديد للطراز (كلاسيك، كاجوال)
      key: "tags",
      options: ["Classic Styles", "Casual Wear", "Evening Wear"]
    },
    {
      label: "Collection", // فلتر جديد للمواسم
      key: "tags",
      options: ["Summer Collection", "Winter Essentials"]
    },
    {
      label: "Gender",
      key: "gender",
      options: ["Womenswear", "Menswear", "Unisex"]
    },
    {
      label: "Color", // تمت إضافة ألوان أكثر
      key: "tags",
      options: ["Black", "Red", "Blue", "White", "Beige", "Green", "Pink", "Gray"]
    }
  ],
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
    { label: "Type", key: "subcategory", options: ["Sofas", "Chairs", "Tables"] },
    { label: "Color", key: "tags", options: ["Gray", "Brown", "Black"] }
  ],

  // ✅ تم إرجاع فلاتر قسم المجوهرات هنا
  jewelry: [
    { 
      label: "Material", 
      key: "material", 
      options: ["Gold", "Silver", "Diamond"] 
    },
    {
      label: "Type",
      key: "subcategory",
      options: ["Necklaces", "Rings", "Bracelets"]
    }
  ],
};