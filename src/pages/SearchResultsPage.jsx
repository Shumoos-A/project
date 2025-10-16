import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products'; // تأكد من أن مسار ملف البيانات صحيح
import ProductCard from '../components/ProductCard'; // تأكد من أن مسار كرت المنتج صحيح

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // فلترة المنتجات بناءً على اسم المنتج أو الوصف
  const filteredProducts = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Search Results for: <span className="text-gray-600">"{query}"</span>
        </h2>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-16 text-lg">
            Sorry, no products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}