
    
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

// صور افتراضية لطرق الدفع
const zainCashLogo = "https://placehold.co/60x40/183372/FFFFFF?text=ZainCash";
const qiCardLogo = "https://placehold.co/60x40/00AEEF/FFFFFF?text=Qi+Card";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  // حالة لتخزين طريقة الدفع المختارة
  const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash', 'zaincash', 'qicard'
  // حالة لتخزين حالة إتمام الطلب
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingCost = 5.00; // تكلفة شحن افتراضية
  const finalTotal = total + shippingCost;

  // دالة لمعالجة إتمام الطلب
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // التحقق من اختيار طريقة الدفع
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    
    // محاكاة إرسال الطلب إلى الخادم
    console.log("Placing order with method:", paymentMethod);
    console.log("Total:", finalTotal);
    
    // عرض رسالة نجاح وإفراغ السلة
    setOrderPlaced(true);
    clearCart();

    // إعادة التوجيه إلى الصفحة الرئيسية بعد 5 ثوانٍ
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };
  
  // إذا كانت السلة فارغة، اعرض رسالة
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Your cart is empty.</h1>
        <Link to="/" className="mt-4 inline-block px-6 py-2 bg-gray-800 text-white rounded-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  // إذا تم إتمام الطلب بنجاح، اعرض رسالة شكر
  if (orderPlaced) {
    return (
      <div className="text-center py-20 max-w-2xl mx-auto">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">Thank You For Your Order!</h1>
        <p className="mt-2 text-gray-600">Your order has been placed successfully. You will be redirected to the homepage shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        
        {/* قسم معلومات الشحن والدفع */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Shipping & Payment</h2>
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            
            {/* معلومات الشحن */}
            <div>
              <h3 className="font-semibold mb-3">Shipping Information</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-lg"/>
                <input type="text" placeholder="Address" required className="w-full p-3 border rounded-lg"/>
                <input type="tel" placeholder="Phone Number" required className="w-full p-3 border rounded-lg"/>
              </div>
            </div>
            
            {/* طرق الدفع */}
            <div>
              <h3 className="font-semibold mb-3">Payment Method</h3>
              <div className="space-y-3">
                
                {/* الدفع عند الاستلام */}
                <div onClick={() => setPaymentMethod('cash')} className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between ${paymentMethod === 'cash' ? 'border-gray-800 ring-2 ring-gray-800' : ''}`}>
                  <div>
                    <h4 className="font-bold">Cash on Delivery</h4>
                    <p className="text-sm text-gray-500">Pay when you receive your order.</p>
                  </div>
                  {paymentMethod === 'cash' && <div className="w-5 h-5 bg-gray-800 rounded-full"/>}
                </div>

                {/* زين كاش (محاكاة) */}
                <div onClick={() => setPaymentMethod('zaincash')} className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between ${paymentMethod === 'zaincash' ? 'border-gray-800 ring-2 ring-gray-800' : ''}`}>
                   <div>
                    <h4 className="font-bold">Pay with ZainCash</h4>
                    <p className="text-sm text-gray-500">You will be redirected to complete payment.</p>
                  </div>
                  <img src={zainCashLogo} alt="ZainCash" className="max-w-xs"/>
                </div>

                {/* كي كارد (محاكاة) */}
                <div onClick={() => setPaymentMethod('qicard')} className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between ${paymentMethod === 'qicard' ? 'border-gray-800 ring-2 ring-gray-800' : ''}`}>
                   <div>
                    <h4 className="font-bold">Pay with Qi Card</h4>
                    <p className="text-sm text-gray-500">You will be redirected to complete payment.</p>
                  </div>
                   <img src={qiCardLogo} alt="Qi Card" className="max-w-xs"/>
                </div>
              </div>
            </div>
            
            <button type="submit" className="w-full h-12 text-lg rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
              Place Order (${finalTotal.toFixed(2)})
            </button>
          </form>
        </div>
        
        {/* قسم ملخص الطلب */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.cartItemId} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.images[0]} alt={item.name} className="w-16 h-16 rounded-lg object-cover"/>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <hr className="my-6"/>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping</p>
              <p className="font-semibold">${shippingCost.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <p>Total</p>
              <p>${finalTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
