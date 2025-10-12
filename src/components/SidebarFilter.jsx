import React from 'react';
import { filterConfig } from '../data/filters';

export default function SidebarFilter({ currentCategory, onFilterChange, selectedFilters }) {
  // 1. احصل على إعدادات الفلترة للقسم الحالي فقط
  const filters = filterConfig[currentCategory.toLowerCase()];

  // إذا لم يكن هناك قسم محدد أو لا توجد له فلاتر، لا تعرض شيئًا
  if (!filters) {
    return null;
  }

  const handleCheckboxChange = (filterKey, option) => {
    // 2. استدع الدالة الممررة من Home لتحديث حالة الفلاتر
    onFilterChange(filterKey, option);
  };

  return (
    <aside className="w-full lg:w-64 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Filters</h3>
      <div className="space-y-6">
        {filters.map((filter) => (
          <div key={filter.key}>
            <h4 className="font-semibold mb-2">{filter.label}</h4>
            <div className="space-y-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    // 3. تحقق مما إذا كان الخيار محددًا بالفعل
                    checked={selectedFilters[filter.key]?.includes(option.toLowerCase()) || false}
                    onChange={() => handleCheckboxChange(filter.key, option.toLowerCase())}
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}