import { useState, useEffect } from 'react';

/**
 * useApi — fetches data from the Django API on mount.
 * @param {string} endpoint  e.g. '/jobs/'
 * @param {any}    fallback  value to use while loading or on error
 * @returns {{ data, loading, error, refetch }}
 */
function useApi(endpoint, fallback = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:8000/api${endpoint}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      // DRF returns either an array or a paginated object
      setData(Array.isArray(json) ? json : json.results ?? json);
    } catch (err) {
      setError(err.message);
      setData(fallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
}

export default useApi;
