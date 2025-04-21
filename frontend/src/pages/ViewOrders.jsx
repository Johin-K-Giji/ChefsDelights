import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar';
import { FiSearch } from 'react-icons/fi';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('https://chefsdelights.onrender.com/api/orders/getorder')
      .then(response => {
        setOrders(response.data); // Assuming the response is an array of orders
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
  };

  const filteredOrders = orders.filter(order =>
    order.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">View Orders</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full max-w-sm p-2 pl-10 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
        </div>

        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-green-500 text-white text-left">
              <th className="p-4">S. No</th>
              <th className="p-4">Full Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Address</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Payment Mode</th>
              <th className="p-4">Transaction ID</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={order._id || index} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-700">{index + 1}</td>
                  <td className="p-4 text-gray-700">{order.userName}</td>
                  <td className="p-4 text-gray-700">{order.phone}</td>
                  <td className="p-4 text-gray-700">{order.address}</td>
                  <td className="p-4 text-gray-700">₹{order.orderAmount}</td>
                  <td className="p-4 text-gray-700">{order.paymentMode}</td>
                  <td className="p-4 text-gray-700">{order.transactionId}</td>
                  <td className="p-4 text-gray-700">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
