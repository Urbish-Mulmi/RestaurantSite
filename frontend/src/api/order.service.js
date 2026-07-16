// order.service.js
import api from "./apiInstance"
export const createOrder  = async (data) => {
   try {
    const res = await api.post("/orders/create", data);
    console.log("Order Created Success:", res.data);
    return res.data;
  } catch (error) {
    console.error("Failed to create order :", error.response?.data || error.message);
    throw error;
  }
}

export const getOrder = async (id) =>{
  const res = await api.get(`/orders/${id}`);
  return res.data;
}

// admin-only: fetch every order
export const getAllOrders = async () => {
  const res = await api.get("/orders");
  return res.data;
};

// admin-only: update an order's payment status
export const updateOrderStatus = async (id, paymentStatus) => {
  const res = await api.patch(`/orders/${id}/status`, { paymentStatus });
  return res.data;
};