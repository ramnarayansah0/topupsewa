'use client';
import React, { useEffect, useState } from "react";
import Pubgdata from "../component/Pubgdata";

interface User {
  id: number;
  names: string;
  playerid: string;
  price: string;
  whatsapp: string;
  source?: string; // Add a source field to distinguish
}

export default function Data() {
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
        const projectUsers: User[] = usersData.map((user: unknown) => {
          if (user && typeof user === 'object' && 'id' in user && 'names' in user && 'playerid' in user && 'price' in user && 'whatsapp' in user) {
            return {
              id: Number(user.id),
              names: String(user.names),
              playerid: String(user.playerid),
              price: String(user.price),
              whatsapp: String(user.whatsapp),
              source: 'FreeFire',
            };
          }
          throw new Error('Invalid user data structure');
        });

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
        const pubgUsers: User[] = pubgData.map((entry: unknown) => {
          if (entry && typeof entry === 'object' && 'id' in entry && 'naam' in entry && 'gamesid' in entry && 'rate' in entry && 'message' in entry) {
            return {
              id: Number(entry.id),
              names: String(entry.naam),
              playerid: String(entry.gamesid),
              price: String(entry.rate),
              whatsapp: String(entry.message),
              source: 'Pubg',
            };
          }
          throw new Error('Invalid pubg entry data structure');
        });

        // Fetch Tiktok
        const tiktokResponse = await fetch(`${baseUrl}/api/tiktok`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!tiktokResponse.ok) {
          const errorData = await tiktokResponse.json();
          throw new Error(errorData.error || `HTTP error! status: ${tiktokResponse.status}`);
        }
        const tiktokData = await tiktokResponse.json();
        const tiktoktUsers: User[] = tiktokData.map((tiktok: Record<string, unknown>) => {
          if (tiktok && typeof tiktok === 'object' && 'id' in tiktok && 'naam' in tiktok && 'rate' in tiktok && 'whatsapp' in tiktok) {
            return {
              id: Number(tiktok.id),
              names: String(tiktok.naam),
              playerid: String(tiktok.videoslink),
              price: String(tiktok.rate),
              whatsapp: String(tiktok.whatsapp),
              source: 'Tiktok',
            };
          }
          throw new Error('Invalid tiktok data structure');
        });

        // Combine and sort by id descending
        const combinedUsers = [...projectUsers, ...pubgUsers, ...tiktoktUsers].sort((a, b) => b.id - a.id);
        setUsers(combinedUsers);
      } catch (err: unknown) {
        console.error("Error fetching data:", err);
        setError(err instanceof Error ? err.message : 'Failed to load users');
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
      <div className=" bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left">SN</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Player ID</th>
              <th className="px-4 py-2 text-left">whatsapp</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto text-gray-900 dark:text-white">
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center">No users found</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.names}</td>
                  <td className="px-4 py-2">{user.playerid}</td>
                  <td className="px-4 py-2">{user.whatsapp}</td>
                  <td className="px-4 py-2">{user.price}</td>
                  <td className="px-4 py-2">{user.source || 'Project'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pubgdata/>
    </div>
  );
}
