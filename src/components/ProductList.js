// ProductList.js

// هذا هو تصميم بطاقة المنتج الواحدة
function ProductCard({ product }) {
  return (
    <div className="product-card border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* يمكنك إضافة صورة المنتج هنا */}
      {/* <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" /> */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 product-title">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}


// هذا هو المكون الرئيسي الذي يعرض كل البطاقات
export default function ProductList({ products }) {
  return (
    // حاوية الشبكة التي تنظم المنتجات
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*
          هنا نقوم بالمرور على قائمة المنتجات المفلترة
          ونعرض بطاقة لكل منتج
        */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}