import React, { useState, useEffect } from 'react';

function RegisterModal({ onClose, openLoginModal  }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Exibe o modal quando ele for montado
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de registro, como uma chamada para uma API
    alert(`Cadastro realizado com: ${name}, ${email}, ${birthDate}`);
    onClose(); // Fecha o modal após o registro
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => { e.stopPropagation(); }} >
        <div className="circle"></div> <span onClick={onClose}>&times;</span>
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              className='input'
              type="text"
              id="name"
              value={name} placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className='input'
              type="email"
              id="email"
              value={email} placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              className='input'
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              className='input'
              type="password"
              id="password"
              value={password} placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>

        <p>Já possui conta? <a href="" onClick={openLoginModal}>Faça login</a></p>
      </div>
    </div>
  );
};

export default RegisterModal;
