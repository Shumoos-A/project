import React from 'react';
import { Link } from 'react-router-dom';
// استيراد أيقونات جديدة لتمثيل الفئات
import { Shirt, Sparkles, Sofa, Gem } from 'lucide-react';

// مكون الشعار
const EvolaLogoComponent = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="bg-gray-800 text-white font-bold text-4xl rounded-lg w-16 h-16 flex items-center justify-center">E</div>
        <span className="text-gray-800 text-6xl font-serif font-extrabold">Evola</span>
    </div>
);

// ✅ الفكرة الجديدة 1: مكون أيقونات الفئات
const CategoryIcons = () => {
  const categories = [
    { name: 'Fashion', icon: <Shirt size={32} /> },
    { name: 'Makeup & Perfumes', icon: <Sparkles size={32} /> },
    { name: 'Jewelry', icon: <Gem size={32} /> },
    { name: 'Furniture', icon: <Sofa size={32} /> },
  ];

  return (
    <div className="w-full bg-gray-50 rounded-2xl p-8 grid grid-cols-2 gap-6 text-center">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center justify-center">
          <div className="bg-gray-200 rounded-full p-4 text-black">
            {cat.icon}
          </div>
          <p className="mt-3 font-semibold text-gray-800">{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

// ✅ الفكرة الجديدة 2: مكون شهادة العميل
const Testimonial = () => (
  <div className="w-full bg-gray-800 text-white rounded-2xl p-8 flex flex-col justify-center">
    <blockquote className="text-xl italic border-l-4 border-gray-500 pl-6">
      "Shopping at Evola is an experience. The quality is exceptional, and every piece feels unique and special. It's my go-to store for adding a touch of elegance to my life and home."
    </blockquote>
    <p className="mt-4 font-semibold text-right text-gray-300">- A Happy Customer</p>
  </div>
);


export default function AboutUs() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <EvolaLogoComponent />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to Evola
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your destination for Fashion, Makeup, Perfumes, and exquisite Furniture.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {/* قسم الرؤية مع أيقونات الفئات */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision: A World of Elegance</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                We believe that style is a form of self-expression. Our vision is to provide a curated universe of products—from trend-setting fashion and beauty to timeless furniture—that empower you to create a life that is uniquely and beautifully yours.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* ✅ تم استبدال الصورة هنا */}
              <CategoryIcons />
            </div>
          </div>

          {/* قسم المهمة مع شهادة العميل */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission: Quality & Trust</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Our mission is to build a lasting relationship with you based on trust and exceptional quality. We meticulously select every item, ensuring it meets our high standards of craftsmanship, so you can shop with confidence, knowing you're getting the very best.
              </p>
            </div>
            <div className="md:w-1/2">
               {/* ✅ تم استبدال الصورة هنا */}
               <Testimonial />
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Discover the Evola Difference</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
            Ready to explore our curated selection? Your journey into elegance starts here.
          </p>
          <Link to="/products/all" className="inline-block mt-8">
            <button className="px-12 py-4 bg-gradient-to-r from-gray-800 to-black text-white text-xl font-bold rounded-full shadow-lg hover:from-black hover:to-gray-900 transform hover:scale-105 transition duration-300 ease-in-out">
              Start Shopping Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}