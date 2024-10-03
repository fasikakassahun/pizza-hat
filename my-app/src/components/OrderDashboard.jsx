
// OrderDashboard.js
import React, { useState } from 'react';

const statusColors = {
  'Being Prepared': 'bg-yellow-300',
  'Order Confirmed': 'bg-blue-300',
  'Completed': 'bg-green-300',
  'Ready to Serve': 'bg-green-500',
  'Served': 'bg-teal-500',
};

const OrderDashboard = () => {
  const [orders, setOrders] = useState([
    { id: 1, table: 'Table Three', status: 'Being Prepared', items: ['3x Cabbage', '1x Salmon Fillet', '2x Pomegranate'], time: '7:30' },
    { id: 2, table: 'Table Three', status: 'Order Confirmed', items: ['3x Cabbage', '1x Salmon Fillet', '2x Pomegranate'], time: '7:30' },
    { id: 3, table: 'Table Three', status: 'Completed', items: ['3x Cabbage', '1x Salmon Fillet', '2x Pomegranate'], time: '7:30' },
    { id: 4, table: 'Table Three', status: 'Ready to Serve', items: ['3x Cabbage', '1x Salmon Fillet', '2x Pomegranate'], time: '7:30' },
    { id: 5, table: 'Table Three', status: 'Served', items: ['3x Cabbage', '1x Salmon Fillet', '2x Pomegranate'], time: '7:30' },
  ]);

  // Helper function to prompt the user for new order details
  const addOrder = () => {
    const table = prompt('Enter table name:');
    const items = prompt('Enter items (comma separated):').split(',');
    const status = prompt('Enter order status (Being Prepared, Order Confirmed, Completed, Ready to Serve, Served):');
    const time = new Date().toLocaleTimeString();

    setOrders([
      ...orders,
      { id: orders.length + 1, table, status, items, time }
    ]);
  };

  const removeOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  return (
    <div className="p-6" style={{ zoom: 1.2 }}> {/* Added zoom here */}
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="flex flex-wrap gap-4">
        {orders.map(order => (
          <div key={order.id} className={`p-4 w-64 rounded shadow-lg ${statusColors[order.status]} text-black`}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold">{order.table}</h2>
              <span className="text-sm">{order.time}</span>
            </div>
            <ul className="mt-2">
              {order.items.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-semibold">Update Status:</label>
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                className="w-full p-2 rounded border"
                disabled={order.status === 'Served'} // Disabled if the order is 'Served'
              >
                <option value="Being Prepared">Being Prepared</option>
                <option value="Order Confirmed">Order Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Ready to Serve">Ready to Serve</option>
                <option value="Served">Served</option>
              </select>
            </div>
            <div className="flex justify-between items-center mt-4">
              {order.status !== 'Served' && (
                <>
                  <button
                    onClick={() => removeOrder(order.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded shadow hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => alert('Add new item functionality')}
                    className="bg-blue-500 text-white px-2 py-1 rounded shadow hover:bg-blue-600"
                  >
                    Add Item
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={addOrder}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Add New Order
      </button>
    </div>
  );
};

export default OrderDashboard;
