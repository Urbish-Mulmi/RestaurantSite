// user.service.js
import api from "./apiInstance";

// admin-only: fetch every user
export const getAllUsers = async () => {
  try {
    const res = await api.get("/users/all");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch users:", error.response?.data || error.message);
    throw error;
  }
};

// admin-only: promote/demote a user's role
export const updateUserRole = async (id, role) => {
  try {
    const res = await api.patch(`/users/${id}/role`, { role });
    return res.data;
  } catch (error) {
    console.error("Failed to update user role:", error.response?.data || error.message);
    throw error;
  }
};

// admin-only: delete a user
export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to delete user:", error.response?.data || error.message);
    throw error;
  }
};