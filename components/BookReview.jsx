"use client"
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '@/app/firebase.';

const BookReview = () => {
  const [reviews, setReviews] = useState([]); // ✅ Correct useState
  const [newReviews, setNewReviews] = useState({
    title: "",
    author: "",
    rating: 0,
    review: ""
  });

  const addReviews = async () => {
    try {
      await addDoc(collection(db, "reviews"), {
        title: newReviews.title,
        author: newReviews.author,
        rating: newReviews.rating,
        review: newReviews.review
      });

      setNewReviews({
        title: "",
        author: "",
        rating: 0,
        review: ""
      });

      console.log("Review added!");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className='max-w-7xl md:mx-auto mx-4'>
      <h2 className='text-2xl font-semibold mb-2'>Add Reviews</h2>
      <div className='flex flex-col items-start justify-start gap-4 max-w-md'>
        <input
          type="text"
          placeholder='Book Title'
          className='p-2 border rounded border-gray-400'
          value={newReviews.title}
          onChange={(e) => setNewReviews({ ...newReviews, title: e.target.value })}
        />

        <input
          type="text"
          placeholder='Author Name'
          className='p-2 border rounded border-gray-400'
          value={newReviews.author}
          onChange={(e) => setNewReviews({ ...newReviews, author: e.target.value })}
        />

        <input
          type="number"
          placeholder='Rating'
          className='p-2 border rounded border-gray-400'
          value={newReviews.rating}
          onChange={(e) => setNewReviews({ ...newReviews, rating: Number(e.target.value) })}
        />

        <textarea
          placeholder='Review text'
          className='p-2 border rounded border-gray-400 w-full'
          value={newReviews.review}
          onChange={(e) => setNewReviews({ ...newReviews, review: e.target.value })}
        ></textarea>

        <button
          onClick={addReviews}
          className='px-4 py-2 bg-blue-600 text-white rounded'
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default BookReview;
