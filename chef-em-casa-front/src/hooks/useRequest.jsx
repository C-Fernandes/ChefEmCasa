
import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
        let response;
        if (method === 'POST') {
          response = await axios.post(url, body);
        } else if (method === 'PUT') {
          response = await axios.put(url, body);
        } else if (method === 'PATCH') {
          response = await axios.patch(url, body);
        } else {
          response = await axios.get(url);
        }
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
};

export default useRequest;