import { useState } from 'react';

const useSubmit = (url, method = 'POST') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const submit = async (payload) => {
    setLoading(true);
    setError(null);

    const fullUrl = `http://localhost:8080/${url}`; // A URL completa

    try {
      const response = await fetch(fullUrl, {
        method,
        headers: {
          'Content-Type': 'application/json', // Garantir que o conteúdo é JSON
        },
        body: JSON.stringify(payload), // Transformar o corpo para JSON
      });

      if (!response.ok) {
        throw new Error(`Falha na requisição: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result); // Armazenar a resposta da API
    } catch (err) {
      setError(err.message); // Armazenar o erro caso ocorra
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return { submit, loading, error, data };
};

export default useSubmit;
