// UserManagement.jsx
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers, updateUserRole, deleteUser } from '../api/user.service.js';

const roleOptions = ["user", "admin"];

const UserManagement = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const loadUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data.users);
    } catch (err) {
      console.error("Failed to load users:", err);
      setError("Could not fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRoleUpdate = async (id, role) => {
    try {
      await updateUserRole(id, role);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, role } : u))
      );
    } catch (err) {
      console.error("Failed to update role:", err);
      alert("Failed to update role");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user? This cannot be undone.")) return;

    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Failed to delete user");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
        <span className="ml-3 text-lg font-medium text-gray-600">
          Loading users...
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

  const filteredUsers = users.filter((u) => {
    const term = search.toLowerCase();
    return (
      u.fullName?.toLowerCase().includes(term) ||
      u.email?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900">
            User Management
          </h1>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700">
            A list of all registered users and their roles.
          </p>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-16 sm:flex-none">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
          No users found.
        </div>
      )}

      {/* MOBILE: Stacked Cards - below sm */}
      <div className="sm:hidden flex flex-col gap-3">
        {filteredUsers.map((u) => {
          const isSelf = u._id === currentUser?._id;
          return (
            <div
              key={u._id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm truncate">
                    {u.fullName} {isSelf && <span className="text-xs text-gray-500">(You)</span>}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">{u.email}</p>
                </div>
                <span className="shrink-0 text-xs text-gray-400 whitespace-nowrap">
                  {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "-"}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <select
                  value={u.role}
                  disabled={isSelf}
                  onChange={(e) => handleRoleUpdate(u._id, e.target.value)}
                  className="text-xs border border-gray-200 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <button
                  disabled={isSelf}
                  onClick={() => handleDelete(u._id)}
                  className="text-red-600 text-xs font-medium disabled:text-gray-300 disabled:cursor-not-allowed"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* DESKTOP: Table - sm and up */}
      {filteredUsers.length > 0 && (
        <div className="hidden sm:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full table-fixed divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-4 w-48">
                  Name
                </th>
                <th scope="col" className="px-4 py-4">
                  Email
                </th>
                <th scope="col" className="px-4 py-4 w-32">
                  Joined
                </th>
                <th scope="col" className="px-4 py-4 w-32">
                  Role
                </th>
                <th scope="col" className="px-4 py-4 text-right w-24">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredUsers.map((u) => {
                const isSelf = u._id === currentUser?._id;
                return (
                  <tr key={u._id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="px-4 py-4 font-medium text-gray-900 truncate">
                      {u.fullName} {isSelf && <span className="text-xs text-gray-500">(You)</span>}
                    </td>

                    <td className="px-4 py-4 text-gray-600 truncate">{u.email}</td>

                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">
                      {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "-"}
                    </td>

                    <td className="px-4 py-4">
                      <select
                        value={u.role}
                        disabled={isSelf}
                        onChange={(e) => handleRoleUpdate(u._id, e.target.value)}
                        className="text-xs border border-gray-200 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {roleOptions.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="px-4 py-4 text-right text-sm font-medium whitespace-nowrap">
                      <button
                        disabled={isSelf}
                        onClick={() => handleDelete(u._id)}
                        className="text-red-600 hover:text-red-900 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:text-gray-300"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagement;