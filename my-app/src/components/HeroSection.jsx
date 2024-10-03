import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-red-500 p-8 text-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Left: Image */}
          <div className="w-1/2">
            <img src="./images/bg.png" alt="burger" className="rounded-full shadow-lg" />
          </div>

          {/* Right: Text with background image */}
          <div className="w-1/2 relative">
            <div 
              className="p-8 text-left"
              style={{
                backgroundImage: `url('./images/your-background-image.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px'
              }}
            >
              <h1 className="text-4xl font-bold">Special Deals</h1>
              <p className="mt-2">
                Don’t miss out on our exclusive offers. Get them before they’re gone!
              </p>
            </div>
          </div>
        </div>

        {/* Centered Countdown Timer and Search Button below the text and image */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          {/* Countdown Timer */}
          <div className="flex space-x-4">
            <div className="p-4 bg-white text-black rounded-lg shadow-lg">
              <p>130 Days</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg shadow-lg">
              <p>04 Hours</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg shadow-lg">
              <p>56 Mins</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg shadow-lg">
              <p>28 Secs</p>
            </div>
          </div>

          {/* Search Button */}
          <button
            className="px-6 py-3 bg-white text-red-500 font-bold rounded-full hover:bg-red-700 hover:text-white transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
