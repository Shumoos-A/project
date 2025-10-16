

import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

// ===================================================================
// ## الخطوة 1: الصق مفاتيحك هنا بدقة ##
const supabaseUrl = 'https://cmhhvyhdovexqztyojcn.supabase.co';       // الصق رابط المشروع هنا
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaGh2eWhkb3ZleHF6dHlvamNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNjg0MjcsImV4cCI6MjA3NTc0NDQyN30.ZM9vGFGHP_EPoOvJhN6EPNuve-FGcaRBFh0y-jjPQNo';  // الصق مفتاح anon public هنا
// ===================================================================

let supabase;
let initializationError;
try {
  if (!supabaseUrl || supabaseUrl.includes('YOUR_SUPABASE_URL')) {
    throw new Error("Supabase URL is missing. Please paste it from your Supabase project settings.");
  }
  supabase = createClient(supabaseUrl, supabaseKey);
} catch (error) {
  console.error("Supabase initialization error:", error);
  initializationError = error.message;
}

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState(null);

  // التحقق من نجاح الاتصال
  if (initializationError) {
    return (
      <div className="mt-12 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <h3 className="font-bold text-lg">Database Connection Error</h3>
        <p>{initializationError}</p>
      </div>
    );
  }

  // دالة لجلب التعليقات من Supabase
  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('reviews')
      .select()
      .eq('product_id', productId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error);
      setError('Could not fetch reviews.');
    } else {
      setReviews(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  // دالة لإرسال تعليق جديد
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
      alert("Failed to submit review.");
    } else {
      await fetchReviews();
      setNewComment("");
      setAuthorName("");
      setNewRating(5);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
      
      <form onSubmit={handleSubmitReview} className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
        <h3 className="font-semibold text-lg">Leave your review</h3>
        <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input id="authorName" type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder="user" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select value={newRating} onChange={e => setNewRating(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value={5}>5 Stars ★★★★★</option>
                <option value={4}>4 Stars ★★★★☆</option>
                <option value={3}>3 Stars ★★★☆☆</option>
                <option value={2}>2 Stars ★★☆☆☆</option>
                <option value={1}>1 Star ★☆☆☆☆</option>
            </select>
        </div>
        <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea id="comment" value={newComment} onChange={e => setNewComment(e.target.value)} rows="4" placeholder="What did you like or dislike?" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
        </div>
        <button type="submit" className="px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-700 transition">Submit Review</button>
      </form>

      <div className="space-y-6">
        {loading ? <p>Loading reviews...</p> : 
          error ? <p className="text-red-500">{error}</p> :
          reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="bg-white p-5 rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-800">{review.author}</p>
                    <div className="flex items-center text-yellow-500">
                        {Array.from({length: review.rating}).map((_, i) => <span key={i}>★</span>)}
                        {Array.from({length: 5 - review.rating}).map((_, i) => <span keyi={i}>☆</span>)}
                    </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <p className="text-xs text-gray-400 mt-3 text-right">{new Date(review.created_at).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No reviews yet. Be the first to write one!</p>
          )
        }
      </div>
    </div>
  );
}













