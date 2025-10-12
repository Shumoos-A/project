import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { total, clear } = useCart();
  const [paid, setPaid] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    // mock payment
    setTimeout(()=> { setPaid(true); clear(); }, 600);
  };

  if (paid) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="mx-auto w-20 h-20 rounded-full bg-emerald-100 grid place-items-center text-emerald-600 text-3xl">✓</div>
        <h2 className="mt-6 text-2xl font-bold">Payment Successful</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase!</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handlePay} className="grid gap-4 rounded-2xl border border-black/10 bg-white p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input required className="mt-1 h-11 w-full rounded-xl border border-black/10 px-3" placeholder="John Doe"/>
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input type="email" required className="mt-1 h-11 w-full rounded-xl border border-black/10 px-3" placeholder="john@example.com"/>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-600">Address</label>
          <input required className="mt-1 h-11 w-full rounded-xl border border-black/10 px-3" placeholder="Street, City, Country"/>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Card Number</label>
            <input required className="mt-1 h-11 w-full rounded-xl border border-black/10 px-3" placeholder="4242 4242 4242 4242"/>
          </div>
          <div>
            <label className="text-sm text-gray-600">CVC</label>
            <input required className="mt-1 h-11 w-full rounded-xl border border-black/10 px-3" placeholder="123"/>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-2xl font-extrabold text-emerald-600">${total.toFixed(2)}</span>
        </div>
        <button type="submit" className="h-11 rounded-xl bg-gray-900 text-white hover:bg-gray-800">Simulate Payment</button>
      </form>
    </div>
  );
}
