
import React from "react";
import { FaHome, FaUtensils, FaUser, FaCog, FaClipboardList, FaUsers } from 'react-icons/fa'; // Importing icons

const SidebarLayout = ({ setCurrentView }) => {
  return (
    <div className="transform scale-125 origin-top-left">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-red-600 text-white w-32 h-full flex flex-col items-center py-8 space-y-10 fixed">
          {/* Home Icon */}
          <button
            onClick={() => setCurrentView("home")}
            className="hover:bg-red-700 p-4 rounded-full"
          >
            <FaHome size={40} /> {/* Increased icon size */}
          </button>

          {/* Orders Icon */}
          <button
            onClick={() => setCurrentView("orders")}
            className="hover:bg-red-700 p-4 rounded-full"
          >
            <FaUtensils size={40} /> {/* Increased icon size */}
          </button>

          {/* Reviews Icon */}
          <button
            onClick={() => setCurrentView("reviews")}
            className="hover:bg-red-700 p-4 rounded-full"
          >
            <FaUser size={40} /> {/* Increased icon size */}
          </button>

          {/* Settings Icon */}
          <button
            onClick={() => setCurrentView("settings")}
            className="hover:bg-red-700 p-4 rounded-full"
          >
            <FaCog size={40} /> {/* Increased icon size */}
          </button>

          {/* Waiter Attendance Icon */}
          <button
            onClick={() => setCurrentView("attendance")}
            className="hover:bg-red-700 p-4 rounded-full"
          >
            <FaUsers size={40} /> {/* Increased icon size */}
          </button>

          {/* Order Dashboard Icon */}
          <button
            onClick={() => setCurrentView("dashboard")}
            className="hover:bg-red-700 p-4 rounded-full"
          >
            <FaClipboardList size={40} /> {/* Increased icon size */}
          </button>
        </div>

        {/* Main content area */}
        <div className="ml-32 w-full p-10">
          {/* Rendered view passed from parent App.js */}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;





