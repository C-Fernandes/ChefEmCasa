import React, { useState, useEffect } from 'react';

function LoginModal({ onClose, openRegisterModal}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Exibe o modal quando ele for montado
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de login, como uma chamada para uma API
    alert(`Login feito com: ${username}`);
    onClose(); // Fecha o modal após o login
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => { e.stopPropagation(); }} >
        <div className="circle"></div> <span onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário</label>
            <input
              className='input'
              type="text"
              id="username"
              value={username} placeholder="email"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              className='input'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>

        <p>Ainda não possui conta? <a href="#" onClick={openRegisterModal}>Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default LoginModal;
