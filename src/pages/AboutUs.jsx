import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-3xl w-full p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>

        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-semibold">EliteStore</span>! We are dedicated to providing you with the best shopping experience, featuring a curated selection of electronics, fashion, and lifestyle products.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          We are students at <span className="font-semibold">Women in Tech</span>, and this project is a collaborative assignment completed by <span className="font-semibold">Shumoos Abdulrasool and Huda Hussein </span>.
        </p>

        <p className="text-gray-700 text-lg">
          Our goal is to build an intuitive, modern, and user-friendly e-commerce platform while gaining practical experience in React, Tailwind CSS, and web development best practices.
        </p>

        <div className="mt-6 text-center">
          <span className="text-gray-600 italic">— The EliteStore Team</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
