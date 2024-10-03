import React from 'react';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center bg-gray-100">
      {/* Logo with different colors for Pizza and Hut */}
      <h1 className="text-4xl ml-12 bg-gray-100 p-2 rounded-lg">
        <span className="text-pink-500 font-bold">Pizza</span>
        <span className="text-yellow-500 font-bold"> Hut</span>
      </h1>
      {/* Login Button with color change on hover and larger font */}
      <button className="ml-4 bg-pink-500 text-white text-lg px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
        Login
      </button>
    </header>
  );
};

export default Header;
