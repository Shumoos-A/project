import { useState, useEffect } from "react";
// هذا هو السطر المهم الذي تم تعديله
import { supabase } from "@/supabaseClient.js";

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [authorName, setAuthorName] = useState("");

  async function fetchReviews() {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select()
      .eq('product_id', productId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error);
    } else {
      setReviews(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (newComment.trim() === "" || authorName.trim() === "") {
        alert("Please fill in your name and comment.");
        return;
    }
    
    const { error } = await supabase
      .from('reviews')
      .insert([{ 
        product_id: productId, 
        comment: newComment, 
        rating: newRating,
        author: authorName,
      }]);

    if (error) {
        console.error("Error submitting review:", error);
    } else {
        fetchReviews(); 
        setNewComment("");
        setAuthorName("");
        setNewRating(5);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
      
      <form onSubmit={handleSubmitReview} className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
        <h3 className="font-semibold text-lg">Leave your review</h3>
        <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input id="authorName" type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder="e.g. Ali Ahmed" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select value={newRating} onChange={e => setNewRating(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
            </select>
        </div>
        <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea id="comment" value={newComment} onChange={e => setNewComment(e.target.value)} rows="4" placeholder="What did you like or dislike?" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
        </div>
        <button type="submit" className="px-6 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700">Submit Review</button>
      </form>

      <div className="space-y-6">
        {loading ? <p>Loading reviews...</p> : 
          reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="bg-white p-5 rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-800">{review.author}</p>
                    <div className="flex items-center text-yellow-500">
                        {Array.from({length: review.rating}).map((_, i) => <span key={i}>★</span>)}
                        {Array.from({length: 5 - review.rating}).map((_, i) => <span key={i}>☆</span>)}
                    </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <p className="text-xs text-gray-400 mt-3 text-right">{new Date(review.created_at).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No reviews yet. Be the first to write one!</p>
          )}
      </div>
    </div>
  );
}