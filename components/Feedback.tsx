'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suggestion: '',
    rating: 0,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setMessage('Thank you for your feedback!');
    setFormData({ name: '', phone: '', suggestion: '', rating: 0 });
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">We Value Your Feedback</h2>
        <p className="mb-8">Help us improve our services and offerings at Fancy Jewellers.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="flex-grow px-4 py-2 rounded-l-md text-gray-900 w-full"
            />
          </div>
          {/* Phone Input */}
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="flex-grow px-4 py-2 rounded-l-md text-gray-900 w-full"
            />
          </div>
          {/* Suggestion Input */}
          <div className="mb-4">
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
              placeholder="Your suggestions"
              rows={4}
              required
              className="flex-grow px-4 py-2 rounded-md text-gray-900 w-full"
            ></textarea>
          </div>
          {/* Rating */}
          <div className="mb-4 text-left">
            <label className="block mb-2 font-bold text-white">Rate Us:</label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`px-4 py-2 rounded-md ${
                    formData.rating >= star ? 'bg-yellow-600' : 'bg-gray-700'
                  }`}
                  aria-label={`${star} Star`}
                >
                  {star}★
                </button>
              ))}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gold text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Submit Feedback
          </button>
          {/* Success Message */}
          {message && <p className="mt-4 text-green-400">{message}</p>}
        </form>
      </div>
    </section>
  );
}
