import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the right arrow icon

const initialImages = [
  { src: "/images/waitersss.jpg", text: "Waiters" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next image
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialImages.length); // Loop back to the first image
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${initialImages[currentIndex].src})` }}
      ></div>

      {/* Overlay text */}
      <div className="absolute bottom-10 left-0 right-0 text-center text-white text-3xl font-bold bg-black bg-opacity-50 py-2 z-10">
        {initialImages[currentIndex].text}
      </div>

      {/* Next button */}
      <button
        onClick={handleNextImage}
        className="absolute right-10 bottom-10 bg-red-600 text-white p-3 rounded-full flex items-center justify-center z-10"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default HomePage;
