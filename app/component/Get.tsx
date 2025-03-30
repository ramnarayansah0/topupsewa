import React from "react";

const Page = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();

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
              </tr>
            </thead>
            <tbody className="overflow-y-auto text-gray-900 dark:text-white">
              {users.map((user: any) => (
                <tr key={user.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.names}</td>
                  <td className="px-4 py-2">{user.playerid}</td>
                  <td className="px-4 py-2">{user.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Failed to load users. Please try again later.</span>
        </div>
      </div>
    );
  }
};

export default Page;
