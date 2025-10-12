import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart, total } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/" className="inline-block mt-4 px-4 py-2 rounded-lg bg-gray-900 text-white">Continue shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 rounded-xl border border-black/10 bg-white p-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price} • {item.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e)=> updateQty(item.id, Number(e.target.value))}
                  className="w-16 h-9 rounded-lg border border-black/10 px-2"
                  min={1}
                />
                <span className="w-24 text-right font-semibold">${(item.price * item.qty).toFixed(2)}</span>
                <button onClick={()=> removeFromCart(item.id)} className="px-3 py-1.5 rounded-lg border border-black/10 hover:bg-gray-50">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-black/10">
            <span className="text-lg font-bold">Total</span>
            <span className="text-xl font-extrabold text-emerald-600">${total.toFixed(2)}</span>
          </div>
          <div className="text-right">
            <Link to="/checkout" className="inline-block mt-2 px-4 py-2 rounded-lg bg-gray-900 text-white">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
