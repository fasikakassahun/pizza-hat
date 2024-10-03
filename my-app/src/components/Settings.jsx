import React from "react";

const Settings = ({ theme, toggleTheme }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-5">
        <p>Current Theme: <strong>{theme}</strong></p>
        <button 
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Settings;
