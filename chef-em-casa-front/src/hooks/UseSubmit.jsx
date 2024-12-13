import { useState } from "react";
const useSubmit = (
  url,
  method = "POST",
  dataName,
  contentType = "application/json"
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const submit = async (payload) => {
    setLoading(true);
    setError(null);

    const fullUrl = `http://localhost:8080/${url}`; // A URL completa

    const formData = new FormData();

    // Adicionar os dados do formulário ao FormData
    // Usamos o dataName para definir o nome da parte do FormData
    formData.append(dataName, JSON.stringify(payload)); // Aqui, enviamos o JSON como uma string

    // Adicionar a imagem (caso exista) ao FormData
    if (payload.image) {
      formData.append("image", payload.image);
    }

    // Adicionar os outros campos de dados ao FormData
    Object.keys(payload).forEach((key) => {
      if (Array.isArray(payload[key])) {
        payload[key].forEach((item, index) => {
          Object.keys(item).forEach((subKey) => {
            formData.append(`${key}[${index}].${subKey}`, item[subKey]);
          });
        });
      } else {
        formData.append(key, payload[key]);
      }
    });

    try {
      const response = await fetch(fullUrl, {
        method,
        body: formData,
        headers: { "Content-Type": contentType },
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
