import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { filterConfig } from '../data/filters';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { category = 'all' } = useParams();
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (key, option) => {
    setSelectedFilters(prev => {
      const currentOptions = prev[key] || [];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter(o => o !== option)
        : [...currentOptions, option];
      return { ...prev, [key]: newOptions };
    });
  };

  const filteredProducts = useMemo(() => {
    const categoryProducts = category === 'all'
      ? products
      : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

    const activeFilterKeys = Object.keys(selectedFilters).filter(key => selectedFilters[key].length > 0);

    if (activeFilterKeys.length === 0) {
      return categoryProducts;
    }

    return categoryProducts.filter(product => {
      return activeFilterKeys.every(key => {
        const selectedOptions = selectedFilters[key];
        const productValue = product[key];
        
        if (key === 'tags' && Array.isArray(product.tags)) {
          return selectedOptions.some(option => product.tags.includes(option));
        }
        if (typeof productValue === 'string') {
          return selectedOptions.includes(productValue);
        }
        return false;
      });
    });
  }, [category, selectedFilters]);

  const currentFilters = category !== 'all' ? (filterConfig[category.toLowerCase()] || []) : [];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {currentFilters.length > 0 && (
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            {currentFilters.map(filterGroup => (
              <div key={filterGroup.label} className="mb-6">
                <h3 className="font-semibold text-lg mb-3 border-b pb-2">{filterGroup.label}</h3>
                <div className="space-y-2">
                  {filterGroup.options.map(option => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="custom-checkbox h-5 w-5 rounded text-black focus:ring-black border-gray-300"
                        checked={selectedFilters[filterGroup.key]?.includes(option) || false}
                        onChange={() => handleFilterChange(filterGroup.key, option)}
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        )}

        <main className={currentFilters.length > 0 ? "w-full md:w-3/4 lg:w-4/5" : "w-full"}>
          <h1 className="text-3xl font-bold mb-6 capitalize">{category} Products</h1>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}