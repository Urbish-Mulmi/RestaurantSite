// orderManagement.jsx
import { useEffect, useState } from 'react';
import { getAllOrders, updateOrderStatus } from '../api/order.service.js';

const orderStatusOptions = [
  "PENDING",
  "COMPLETE",
  "AMBIGOUS",
  "FULL_REFUND",
  "CANCELLED",
  "NOT_FOUND",
  "PARTIAL_REFUND",
  "Service is currently unavailable",
];

const STATUS_BADGE = {
  PENDING: "bg-yellow-50 text-yellow-700 border-yellow-200",
  COMPLETE: "bg-green-50 text-green-700 border-green-200",
  AMBIGOUS: "bg-gray-100 text-gray-600 border-gray-200",
  FULL_REFUND: "bg-purple-50 text-purple-700 border-purple-200",
  CANCELLED: "bg-red-50 text-red-700 border-red-200",
  NOT_FOUND: "bg-gray-100 text-gray-600 border-gray-200",
  PARTIAL_REFUND: "bg-purple-50 text-purple-700 border-purple-200",
  "Service is currently unavailable": "bg-red-50 text-red-700 border-red-200",
};

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data.orders);
    } catch (err) {
      console.error("Failed to load orders:", err);
      setError("Could not fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusUpdate = async (id, paymentStatus) => {
    try {
      await updateOrderStatus(id, paymentStatus);
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, paymentStatus } : order
        )
      );
    } catch (err) {
      console.error("Failed to update order status:", err);
      alert("Failed to update order status");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
        <span className="ml-3 text-lg font-medium text-gray-600">
          Loading orders...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto my-8 max-w-md rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-700">
        <p className="font-semibold">Something went wrong!</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Order Management
        </h1>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700">
          A list of all customer orders, their items, and payment status.
        </p>
      </div>

      {orders.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
          No orders yet.
        </div>
      )}

      {/* MOBILE: Stacked Cards - below sm */}
      <div className="sm:hidden flex flex-col gap-3">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-gray-900 text-sm truncate">
                {order.userId?.fullName}
              </h3>
              <span
                className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-semibold whitespace-nowrap ${
                  STATUS_BADGE[order.paymentStatus] || STATUS_BADGE.AMBIGOUS
                }`}
              >
                {order.paymentStatus}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {order.foods?.map((item, i) => (
                <div key={item.foodId?._id || i} className="flex items-center gap-2">
                  <img
                    src={item.foodId?.photo}
                    alt={item.foodId?.name || "food item"}
                    className="h-10 w-10 flex-shrink-0 rounded-md object-cover border border-gray-100"
                  />
                  <span className="text-xs text-gray-600 truncate">
                    {item.quantity}x {item.foodId?.name || "Removed item"}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end pt-2 border-t border-gray-100">
              <select
                value={order.paymentStatus}
                onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                className="text-xs border border-gray-200 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                {orderStatusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP: Table - sm and up */}
      {orders.length > 0 && (
        <div className="hidden sm:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full table-fixed divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-4 w-40">
                  Customer
                </th>
                <th scope="col" className="px-4 py-4">
                  Food Items
                </th>
                <th scope="col" className="px-4 py-4 w-56">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900 truncate">
                    {order.userId?.fullName}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-2">
                      {order.foods?.map((item, i) => (
                        <div key={item.foodId?._id || i} className="flex items-center gap-2">
                          <img
                            src={item.foodId?.photo}
                            alt={item.foodId?.name || "food item"}
                            className="h-10 w-10 flex-shrink-0 rounded-md object-cover border border-gray-100"
                          />
                          <span className="text-sm text-gray-600 truncate">
                            {item.quantity}x {item.foodId?.name || "Removed item"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-2 py-1 text-[11px] font-semibold whitespace-nowrap ${
                          STATUS_BADGE[order.paymentStatus] || STATUS_BADGE.AMBIGOUS
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                      <select
                        value={order.paymentStatus}
                        onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                        className="text-xs border border-gray-200 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        {orderStatusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;