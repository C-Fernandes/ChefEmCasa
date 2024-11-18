import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues); // Inicializa o estado com os valores fornecidos.

  const handleChange = (event) => {
    const { name, value } = event.target; // Extrai o "name" e "value" do campo que disparou o evento.
    setValues({
      ...values, // Copia os valores atuais.
      [name]: value, // Atualiza apenas o campo correspondente.
    });
  };

  const reset = () => {
    setValues(initialValues); // Restaura os valores iniciais.
  };

  return [values, handleChange, reset]; // Retorna os valores do formulário, a função de mudança e a de reset.
}

export default useForm;
