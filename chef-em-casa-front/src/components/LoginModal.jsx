import React, { useState, useEffect } from "react";
import setAuthToken from "../axiosConfig";

function LoginModal({ onClose, openRegisterModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsVisible(true); // Exibe o modal quando ele for montado
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message || "Login bem-sucedido");
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", data.email);
        setAuthToken();
        alert(data.message || "Login bem-sucedido");
        localStorage.setItem("user", username); // Armazenando no localStorage
        onClose(); // Fecha o modal após o login
      } else {
        setMessage("Credenciais inválidas");
      }
    } catch (error) {
      setMessage("Erro ao tentar fazer login");
    }
  };

  return (
    <div
      className={`modal-overlay ${isVisible ? "visible" : ""}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="circle"></div> <span onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário</label>
            <input
              className="input"
              type="email"
              id="username"
              value={username}
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              className="input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        {message && <p>{message}</p>}
        <p>
          Ainda não possui conta?{" "}
          <a href="#" onClick={openRegisterModal}>
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
