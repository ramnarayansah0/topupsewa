import React from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const Page = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users`);
    const users = await response.json();

    return (
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">SN</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Player ID</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
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
    return <div className="text-red-500">Error loading users...</div>;
  }
};

export default Page;
