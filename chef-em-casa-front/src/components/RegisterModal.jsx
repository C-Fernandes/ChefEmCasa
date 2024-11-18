import React, { useState, useEffect } from 'react';
import useForm from '../hooks/UseForm';
import useSubmit from '../hooks/UseSubmit'; // Supondo que useSubmit seja seu hook de envio

function RegisterModal({ onClose, openLoginModal }) {
  const [formValues, handleChange, reset] = useForm({
    name: '',
    email: '',
    birthDate: '',
    password: '',
  });
  const apiUrl = 'user/register';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Exibe o modal quando ele for montado
  }, []);
  
  const { data, loading, error, submit } = useSubmit(apiUrl); // Supondo que useSubmit seja o hook para enviar dados

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!formValues.name || !formValues.email || !formValues.birthDate || !formValues.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    submit(formValues); // Passa os dados (formValues) para a função submit
  };

  // Fechar o modal após 3 segundos se o cadastro for bem-sucedido
  useEffect(() => {
    if (data) { // Verifica se o cadastro foi bem-sucedido
      const timer = setTimeout(() => {
        onClose(); // Fecha o modal
      }, 3000); // Espera 3 segundos
      return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado
    }
  }, [data, onClose]); // O efeito depende do `data` e do `onClose`

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => { e.stopPropagation(); }}>
        <div className="circle"></div> <span onClick={onClose}>&times;</span>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              placeholder="Nome"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              className="input"
              type="date"
              id="birthDate"
              name="birthDate"
              value={formValues.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              placeholder="Senha"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>

        {error && <p className="error">Erro: {error.message}</p>}
        {data && <p className="success">Cadastro realizado com sucesso!</p>}

        <p>Já possui conta? <a href="" onClick={openLoginModal}>Faça login</a></p>
      </div>
    </div>
  );
}

export default RegisterModal;
