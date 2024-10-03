import React, { useState } from "react";
import SidebarLayout from './components/SidebarLayout';
import HomePage from './components/HomePage';
import OrderDashboard from './components/OrderDashboard';
import OrderTable from './components/OrderTable';
import ReviewsSection from './components/ReviewsSection'; // Updated ReviewsSection
import Settings from './components/Settings';
import WaiterAttendance from './components/WaiterAttendance';
import Header from './components/Header'; // Import the Header component

const App = () => {
  const [orders, setOrders] = useState([
    { id: "123451", time: "7:30", table: "Table 1", total: "$20.00", pay: "Pending", tip: "$2.00", status: "Preparing", today: true },
    { id: "123452", time: "8:00", table: "Table 2", total: "$25.00", pay: "Completed", tip: "$3.00", status: "Completed", today: true },
    { id: "123453", time: "8:15", table: "Table 3", total: "$30.00", pay: "Pending", tip: "$2.50", status: "Preparing", today: true },
    { id: "123454", time: "9:00", table: "Table 4", total: "$22.00", pay: "Completed", tip: "$2.20", status: "Completed", today: false },
    { id: "123455", time: "9:30", table: "Table 5", total: "$28.00", pay: "Pending", tip: "$3.10", status: "Preparing", today: false }
  ]);

  const [currentView, setCurrentView] = useState("home");
  const [theme, setTheme] = useState("light"); // Manage theme state here

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomePage />;
      case "orders":
        return <OrderTable orders={orders} />;
      case "dashboard":
        return <OrderDashboard orders={orders} />;
      case "reviews": // Navigate to Waiter Reviews
        return <ReviewsSection />;
      case "attendance":
        return <WaiterAttendance />;
      case "settings":
        return <Settings theme={theme} toggleTheme={toggleTheme} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} flex flex-col`}>
      {/* Add Header at the top */}
      <Header />

      <div className="flex">
        {/* Sidebar for navigation */}
        <SidebarLayout setCurrentView={setCurrentView} theme={theme} /> 

        {/* Main content area */}
        <div className="flex-1 p-5">
          {renderView()}  {/* Dynamically render the selected view */}
        </div>
      </div>
    </div>
  );
};

export default App;

