import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Adicionando o estado de loading

  const fetchData = async () => {
    setLoading(true); // Inicia o estado de loading
    setError(null); // Reseta erros antes da nova requisição
    try {
      let response;
      const url = 'http://localhost:8080/' + endpoint;

      switch (method) {
        case 'POST':
          response = await axios.post(url, body);
          break;
        case 'PUT':
          response = await axios.put(url, body);
          break;
        case 'PATCH':
          response = await axios.patch(url, body);
          break;
        default:
          response = await axios.get(url);
          break;
      }
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // Finaliza o estado de loading
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, method, body]);

  return { data, error, loading }; // Retorna também o estado de loading
};

export default useFetch;
