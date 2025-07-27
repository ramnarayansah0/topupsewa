'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    names: '',
    playerid: '',
    price: '',
    whatsapp: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form');
      }

      // Clear form after successful submission
      setFormData({
        names: '',
        playerid: '',
        price: '',
        whatsapp: ''
      });
      
      setSuccess(true);
      router.refresh(); // Refresh the page to show updated data
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label htmlFor="names" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="names"
            name="names"
            value={formData.names}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="playerid" className="block text-sm font-medium text-gray-700">Player ID</label>
          <input
            type="text"
            id="playerid"
            name="playerid"
            value={formData.playerid}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp</label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {success && (
          <div className="text-green-500 text-sm">Data submitted successfully!</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
} 