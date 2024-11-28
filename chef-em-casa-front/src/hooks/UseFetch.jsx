import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return; // Evita execução se a URL não estiver definida

    const fullUrl = `http://localhost:8080/${url}`; 


    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // As dependências garantem que useEffect só seja chamado quando a URL ou opções mudarem

  return { data, error, loading };
};

export default useFetch;
