import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Evola
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover the story behind our curated collection.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Evola, our mission is to bring you a carefully selected range of high-quality products that blend style, function, and innovation. We believe in quality over quantity and strive to offer items that you will cherish for years to come.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                className="rounded-2xl shadow-lg"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Our team working"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                We envision a world where shopping is more than just a transaction. It's an experience of discovery and delight. We aim to be your trusted source for products that enhance your lifestyle, from everyday essentials to unique finds that spark joy.
              </p>
            </div>
            <div className="md:w-1/2">
               <img
                className="rounded-2xl shadow-lg"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt="Our vision for the future"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
