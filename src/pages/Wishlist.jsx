import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center">
          <p className="text-gray-600">Your wishlist is empty.</p>
          <Link to="/" className="inline-block mt-4 px-4 py-2 rounded-lg bg-gray-900 text-white">
            Discover Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="rounded-xl border border-black/10 bg-white p-4 flex flex-col justify-between">
              <div>
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-lg font-bold text-emerald-600">${item.price}</p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => removeFromWishlist(item.id)} 
                  className="w-full px-3 py-1.5 rounded-lg border border-black/10 hover:bg-gray-50 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}