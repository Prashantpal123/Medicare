import { useEffect, useState } from 'react';
import { token } from '../config';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in headers
          },
        });

        const result = await res.json(); // Parse JSON from the response

        if (!res.ok) {
          throw new Error(result.message || 'Failed to fetch data 😔');
        }

        setData(result); // Store the data
      } catch (err) {
        setError(err.message); // Store the error message
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchData();
  }, []); // Dependency array ensures that the effect runs when the URL changes

  return { data, loading, error };
};

export default useFetchData;


