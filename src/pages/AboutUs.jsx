import React from 'react';
import { Link } from 'react-router-dom';

// مكون الشعار بنفس تصميم النافبار ولكن بحجم أكبر
const EvolaLogoComponent = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="bg-gray-800 text-white font-bold text-4xl rounded-lg w-16 h-16 flex items-center justify-center">E</div>
        <span className="text-gray-800 text-6xl font-serif font-extrabold">Evola</span>
    </div>
);

export default function AboutUs() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          
          {/* الشعار بشكل كبير */}
          <EvolaLogoComponent />
          
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to Evola
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your destination for Fashion, Makeup, Perfumes, and exquisite Furniture.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {/* قسم الرؤية مع الصورة الأصلية الأولى */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision: Elevate Your Style</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                At Evola, we envision a world where luxury is accessible and personal style flourishes. We meticulously curate collections in **fashion, makeup, and perfumes** to empower you to express your unique self with confidence and grace.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* ✅ تم إرجاع رابط الصورة الأصلي الذي كان يعمل */}
              <img
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Our team working towards a shared vision"
              />
            </div>
          </div>

          {/* قسم المهمة مع الصورة الأصلية الثانية */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission: Crafting Beautiful Spaces</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Beyond personal adornment, our mission extends to your living spaces. We handpick **exquisite furniture pieces** that blend comfort, functionality, and timeless design, transforming a house into a home where memories are made.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* ✅ تم إرجاع رابط الصورة الأصلي الذي كان يعمل */}
               <img
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt="A collection of our quality products"
              />
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