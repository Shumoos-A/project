// src/pages/Cart.js

import { useCart } from "../context/CartContext"; // تأكد من أن المسار صحيح
import { Link } from "react-router-dom";
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

export default function Cart() {
  // استدعاء كل الدوال من الـ Context، بما في ذلك clearCart
  const { cart, updateQty, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        {cart.length > 0 && (
          // ✅ هذا هو الزر الذي يجب أن يعمل الآن
          // onClick يستدعي دالة clearCart مباشرة
          <button
            onClick={clearCart}
            className="bg-black text-white py-2 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Update Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        // ... قسم السلة الفارغة يبقى كما هو ...
        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <Link to="/" className="inline-block mt-6 px-6 py-3 rounded-lg bg-black text-white font-semibold text-lg">
            Continue Shopping
          </Link>
        </div>
      ) : (
        // ... قسم عرض المنتجات يبقى كما هو ...
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={item.images?.[0] || 'https://placehold.co/100x100'}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price.toLocaleString()} IQD</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-300">
                    <FiMinus className="text-gray-600" />
                  </button>
                  <span className="px-3 font-medium">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-300">
                    <FiPlus className="text-gray-600" />
                  </button>
                </div>
                <span className="w-24 text-right font-semibold text-lg">{(item.price * item.qty).toLocaleString()} IQD</span>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-red-600">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-end">
              <div className="w-full max-w-sm space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="font-medium text-gray-600">Total</span>
                  <span className="font-bold text-black text-xl">{total.toLocaleString()} IQD</span>
                </div>
                <Link to="/checkout" className="w-full inline-block text-center px-6 py-3 rounded-lg bg-black text-white font-semibold text-lg">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}