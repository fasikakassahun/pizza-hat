import React, { useState } from "react";

const OrderTable = () => {
  // Initial state for orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      time: "7:30 PM",
      table: "Table 3",
      total: "$50.00",
      pay: "Paid",
      tip: "$5.00",
      status: "Served",
    },
  ]);

  // State for new order form
  const [newOrder, setNewOrder] = useState({
    id: "",
    time: "",
    table: "",
    total: "",
    pay: "",
    tip: "",
    status: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  // Handle form submission to add a new order
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
    setNewOrder({ id: "", time: "", table: "", total: "", pay: "", tip: "", status: "" });
  };

  return (
    <div className="p-6" style={{ zoom: 1.2 }}> {/* Adjusted zoom for larger view */}
      <h1 className="text-3xl font-bold mb-4">Order Table</h1>

      {/* Table for displaying orders */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border text-lg">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="px-6 py-4">No</th>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Ordered Time</th>
              <th className="px-6 py-4">Table</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Pay</th>
              <th className="px-6 py-4">Tip</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="text-center border-t">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.time}</td>
                <td className="px-6 py-4">{order.table}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">{order.pay}</td>
                <td className="px-6 py-4">{order.tip}</td>
                <td className="px-6 py-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form for adding new orders */}
      <form onSubmit={handleSubmit} className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Add New Order</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="time"
            value={newOrder.time}
            onChange={handleInputChange}
            placeholder="Ordered Time"
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="table"
            value={newOrder.table}
            onChange={handleInputChange}
            placeholder="Table"
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="total"
            value={newOrder.total}
            onChange={handleInputChange}
            placeholder="Total"
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="pay"
            value={newOrder.pay}
            onChange={handleInputChange}
            placeholder="Pay"
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="tip"
            value={newOrder.tip}
            onChange={handleInputChange}
            placeholder="Tip"
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="status"
            value={newOrder.status}
            onChange={handleInputChange}
            placeholder="Status"
            className="border p-2 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Order
        </button>
      </form>
    </div>
  );
};

export default OrderTable;
