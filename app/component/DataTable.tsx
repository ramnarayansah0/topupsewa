'use client';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  names: string;
  playerid: string;
  price: string;
  whatsapp: string;
}

export default function DataTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Player ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-gray-600">WhatsApp</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.names}</td>
              <td className="px-4 py-2">{user.playerid}</td>
              <td className="px-4 py-2">{user.price}</td>
              <td className="px-4 py-2">{user.whatsapp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className="text-center py-4 text-gray-500">No data available</div>
      )}
    </div>
  );
} 