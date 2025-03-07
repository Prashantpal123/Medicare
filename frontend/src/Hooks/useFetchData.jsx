import { useState, useEffect, useCallback } from 'react';
import { token } from '../config';

const UseFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Define fetchData function inside useCallback for reuse
  const fetchData = useCallback(async () => {
    setLoading(true); // Ensure loading state updates on each fetch
    setError(null); // Reset error before fetching
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      });
      //hi

      const result = await res.json(); // Parse JSON response

      if (!res.ok) {
        throw new Error(result.message || 'Failed to fetch data 😔');
      }

      setData(result); // Update state with new data
    } catch (err) {
      setError(err.message); // Store error message
    } finally {
      setLoading(false); // Ensure loading is false after fetch
    }
  }, [url]); // ✅ Runs again only when `url` changes

  // ✅ Fetch data when component mounts or `url` changes
  useEffect(() => {
    fetchData();
  }, [fetchData]); // ✅ Now fetchData is stable & won’t cause unnecessary re-renders

  return { data, loading, error, refetch: fetchData }; // ✅ Return refetch function
};

export default UseFetchData;

