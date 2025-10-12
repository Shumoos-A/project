import React from 'react';
import { NavLink } from 'react-router-dom';

// قائمة الأقسام التي ستظهر في الشريط
const categories = [
  { name: 'All Products', path: '/products/all' },
  { name: 'Fashion', path: '/products/fashion' }, // قسم رئيسي للأزياء
  { name: 'Jewelry', path: '/products/jewelry' },
  { name: 'Furniture', path: '/products/furniture' },
  { name: 'Flowers', path: '/products/flowers' },
];

export default function SecondaryNavbar() {
  // هذا النمط سيتم تطبيقه على الرابط النشط حاليًا
  const activeLinkStyle = {
    color: '#111827', // dark gray
    borderBottom: '2px solid #111827',
  };

  return (
    // 1. إرجاع الشريط إلى الشكل الأفقي
    <nav className="bg-white shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. إعادة الارتفاع الثابت */}
        <div className="flex items-center justify-center h-12">
          {/* 3. إعادة اتجاه العرض إلى أفقي مع مسافة بين العناصر */}
          <div className="flex space-x-8">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={category.path}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}