

export const filterConfig = {
  // فلاتر قسم الأزياء
  fashion: [
    {
      label: "Gender",
      key: "gender",
      options: ["Womenswear", "Menswear"]
    },
    {
      label: "Subcategory",
      key: "subcategory",
      options: ["Dresses", "Jeans", "Sweaters", "Jackets", "Pants"]
    },
    {
      label: "Collection", // هذا الفلتر الآن موجود فقط هنا
      key: "tags",
      options: ["Summer Collection", "Winter Essentials", "Classic Styles"]
    },
    {
      label: "Season",
      key: "season",
      options: ["Summer", "Winter", "All-Season"]
    },
    {
      label: "Color",
      key: "tags",
      options: ["Red", "Blue", "Beige", "Black", "Khaki"]
    }
  ],
  
  // فلاتر قسم المجوهرات
  jewelry: [
    {
      label: "Material",
      key: "material",
      options: ["Gold", "Silver", "Diamond"]
    }
  ],
  
  // == فلاتر قسم الأثاث (مكتمل) ==
  furniture: [
    {
      label: "Type", // حسب نوع الأثاث
      key: "subcategory",
      options: ["Sofas", "Chairs", "Tables"]
    },
    {
      label: "Color", // حسب اللون
      key: "tags",
      options: ["Gray", "Brown", "Black", "White"]
    }
  ],
  
  // == فلاتر قسم الزهور (مكتمل) ==
  flowers: [
    {
      label: "Flower Type", // حسب نوع الزهور
      key: "subcategory",
      options: ["Roses", "Tulips", "Lilies"]
    },
    {
      label: "Color", // حسب اللون
      key: "tags",
      options: ["Red", "Yellow", "White", "Pink"]
    }
  ],
};

