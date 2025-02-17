 


import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    feedback: '',
    rating: 0
  });

  const [hover, setHover] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace with your Google Sheet form submission URL
  const FORM_URL = 'https://script.google.com/macros/s/AKfycbzPsu0MbHGIo46QQbmgJg-tF4dtYwJrXXGxOLFd9HM5vdBub5VVnZjcuzinFZR-66ry/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        body: new URLSearchParams(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', location: '', feedback: '', rating: 0 });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-b from-cyan-100 via-teal-300 to-emerald-300">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600">
            We'd love to hear from you! Please share your feedback and experience.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 shadow-lg">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="your@email.com"
            />
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Your location"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Rate your experience
            </label>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    className="cursor-pointer text-2xl"
                    color={ratingValue <= (hover || formData.rating) ? "#3B82F6" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setFormData(prev => ({ ...prev, rating: ratingValue }))}
                  />
                );
              })}
            </div>
          </div>

          {/* Feedback Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Feedback
            </label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Share your thoughts..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.02]"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className="text-green-600 text-center mt-4">
              Thank you for your feedback!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;