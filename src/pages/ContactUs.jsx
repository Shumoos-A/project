import React, { useState } from 'react';

export default function ContactUs() {
  // 1. حالة لتخزين مدخلات المستخدم
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // 2. حالة لتتبع حالة الإرسال (إرسال، نجاح، فشل)
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  // دالة لتحديث الحالة عند الكتابة في الحقول
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // 3. دالة لإرسال البيانات عند الضغط على الزر
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      // ## الخطوة الأهم: الصق رابط Formspree الخاص بك هنا ##
      const response = await fetch('https://formspree.io/f/mzzjkdjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // إفراغ الحقول بعد النجاح
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          {/* 4. عرض رسائل الحالة */}
          {formStatus.success && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {formStatus.error && (
            <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="5" value={formData.message} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus.submitting}
              className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
