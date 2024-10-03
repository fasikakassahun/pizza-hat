import React, { useState } from "react";

// ReviewCard component to display individual waiter reviews
const ReviewCard = ({ author, shiftTime, report }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <h4 className="font-bold">{author}</h4>
      <p className="text-gray-600">Shift Time: {shiftTime}</p>
      <p className="text-gray-700 mt-2">{report}</p>
    </div>
  );
};

// Main ReviewsSection component for waiter reviews
const ReviewsSection = () => {
  // State for the list of reviews (initially empty)
  const [reviews, setReviews] = useState([
    {
      author: "Danel Kebede",
      shiftTime: "7:00 AM - 2:00 PM",
      report: "The day was great, but we ran out of beef, which frustrated some customers. Otherwise, everything was smooth.",
    },
    {
      author: "Kidest Dagmawi",
      shiftTime: "2:00 PM - 10:00 PM",
      report: "Today was a good day overall, but we ran out of water and table 5 was broken.",
    },
  ]);

  // State for new review form inputs
  const [newReview, setNewReview] = useState({
    author: "",
    shiftTime: "",
    report: "",
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle form submission to add a new review
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new review to the list of reviews
    setReviews([...reviews, newReview]);
    // Reset the form
    setNewReview({ author: "", shiftTime: "", report: "" });
  };

  return (
    <div style={{ zoom: 1.2 }}>
      {/* Reviews Header */}
      <header className="flex justify-between items-center pb-4">
        <h1 className="text-2xl font-bold">Waiter Daily Reports</h1>
      </header>

      {/* Reviews List */}
      <div className="space-y-6 mb-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>

      {/* Add New Review Form */}
      <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add a New Report</h2>

        {/* Author (Waiter Name) Input */}
        <input
          type="text"
          name="author"
          value={newReview.author}
          onChange={handleInputChange}
          placeholder="Waiter Name"
          className="w-full px-3 py-2 mb-4 border rounded-lg"
          required
        />

        {/* Shift Time Input */}
        <input
          type="text"
          name="shiftTime"
          value={newReview.shiftTime}
          onChange={handleInputChange}
          placeholder="Shift Time (e.g., 07:00 AM - 2:00 PM)"
          className="w-full px-3 py-2 mb-4 border rounded-lg"
          required
        />

        {/* Waiter Report Input */}
        <textarea
          name="report"
          value={newReview.report}
          onChange={handleInputChange}
          placeholder="Daily Report"
          className="w-full px-3 py-2 mb-4 border rounded-lg"
          rows="4"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReviewsSection;
