
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SidebarFilter from "../components/SidebarFilter"; // استيراد الشريط الجانبي
import { products as data } from "../data/products";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/notFound.json";

export default function Home({ searchQuery }) {
  const { category: categoryFromUrl } = useParams();
  
  // حالة جديدة لتخزين الفلاتر المحددة من قبل المستخدم
  const [selectedFilters, setSelectedFilters] = useState({});

  // هذه الدالة يتم تمريرها إلى الشريط الجانبي ليتم استدعاؤها عند تغيير الفلتر
  const handleFilterChange = (filterKey, option) => {
    setSelectedFilters(prevFilters => {
      const currentOptions = prevFilters[filterKey] || [];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter(item => item !== option) // إذا كان الخيار محددًا، قم بإلغاء تحديده
        : [...currentOptions, option]; // إذا لم يكن محددًا، قم بإضافته

      // إذا كانت قائمة الخيارات فارغة، احذف مفتاح الفلتر نفسه لتنظيف الحالة
      if (newOptions.length === 0) {
        const { [filterKey]: _, ...rest } = prevFilters;
        return rest;
      }

      return { ...prevFilters, [filterKey]: newOptions };
    });
  };

  // useMemo لإعادة حساب قائمة المنتجات المفلترة فقط عند تغيير الاعتماديات
  const filtered = useMemo(() => {
    const currentCategory = categoryFromUrl ? categoryFromUrl.toLowerCase() : "all";
    
    return data.filter(p => {
      // 1. التحقق من تطابق القسم الرئيسي
      const categoryMatch = currentCategory === "all" || (p.category && p.category.toLowerCase() === currentCategory);

      // 2. التحقق من تطابق البحث (يبقى كما هو)
      const searchMatch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());

      // 3. التحقق من تطابق الفلاتر المتقدمة (الجزء الأهم)
      const filterMatch = Object.entries(selectedFilters).every(([key, values]) => {
        if (!values.length) return true; // تجاهل الفلتر إذا لم يتم تحديد أي خيار له
        
        // إذا كان الفلتر للـ "tags" (مثل الألوان)، تحقق مما إذا كان المنتج يحتوي على أي من القيم المحددة
        if (key === 'tags') {
          return values.some(val => p.tags?.map(t => t.toLowerCase()).includes(val));
        }

        // للحقول الأخرى (مثل material أو subcategory)، تحقق من التطابق المباشر
        return values.includes(p[key]?.toLowerCase());
      });

      // يجب أن تتحقق كل الشروط لعرض المنتج
      return categoryMatch && searchMatch && filterMatch;
    });
  }, [searchQuery, categoryFromUrl, selectedFilters]);

  // سنعرض كل النتائج بدون تقسيم الصفحات حاليًا للتبسيط
  const pageItems = filtered; 

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-8 items-start">
        {/* الشريط الجانبي للفلترة (يظهر فقط عند وجود قسم في الرابط) */}
        <div className="lg:col-span-1">
          {categoryFromUrl && categoryFromUrl !== 'all' && (
            <SidebarFilter 
              currentCategory={categoryFromUrl} 
              onFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
            />
          )}
        </div>

        {/* شبكة عرض المنتجات */}
        <div className={categoryFromUrl && categoryFromUrl !== 'all' ? "lg:col-span-3" : "lg:col-span-4"}>
          {pageItems.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {pageItems.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-10 col-span-full">
              <Lottie animationData={notFoundAnimation} loop={true} className="mx-auto w-72 h-72" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">No Products Found</h3>
              <p className="text-gray-500">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}