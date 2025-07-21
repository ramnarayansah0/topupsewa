'use client';
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  names: string;
  playerid: string;
  price: string;
  source?: string; // Add a source field to distinguish
}

export default function Get() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        console.log('Fetching from:', baseUrl);

        // Fetch Project users
        const usersResponse = await fetch(`${baseUrl}/api/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!usersResponse.ok) {
          const errorData = await usersResponse.json();
          throw new Error(errorData.error || `HTTP error! status: ${usersResponse.status}`);
        }
        const usersData = await usersResponse.json();
        const projectUsers: User[] = usersData.map((user: any) => ({
          id: user.id,
          names: user.names,
          playerid: user.playerid,
          price: user.price,
          source: 'Project',
        }));

        // Fetch Pubg users
        const pubgResponse = await fetch(`${baseUrl}/api/pubg`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!pubgResponse.ok) {
          const errorData = await pubgResponse.json();
          throw new Error(errorData.error || `HTTP error! status: ${pubgResponse.status}`);
        }
        const pubgData = await pubgResponse.json();
        const pubgUsers: User[] = pubgData.map((entry: any) => ({
          id: entry.id,
          names: entry.naam,
          playerid: entry.gamesid,
          price: entry.rate,
          source: 'Pubg',
        }));

        // Combine and sort by id descending
        const combinedUsers = [...projectUsers, ...pubgUsers].sort((a, b) => b.id - a.id);
        setUsers(combinedUsers);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg" style={{ maxHeight: '50vh' }}>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left">SN</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Player ID</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto text-gray-900 dark:text-white">
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-2 text-center">No users found</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.names}</td>
                  <td className="px-4 py-2">{user.playerid}</td>
                  <td className="px-4 py-2">{user.price}</td>
                  <td className="px-4 py-2">{user.source || 'Project'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
