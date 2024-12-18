import { useState, useEffect } from "react";

function RegisterModal({ onClose, openLoginModal }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const apiUrl = "http://localhost:8080/auth/register";
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.birthDate ||
      !formValues.password
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar. Tente novamente mais tarde.");
      }

      const data = await response.json();
      setSuccess(true);
      setFormValues({
        name: "",
        email: "",
        birthDate: "",
        password: "",
      }); // Reseta os campos do formulário

      // Fecha o modal após 3 segundos
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal-overlay ${isVisible ? "visible" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
            {loading ? "Enviando..." : "Cadastrar"}
          </button>
        </form>
        {error && <p className="error">Erro: {error.message}</p>}
        {success && <p className="success">Cadastro realizado com sucesso!</p>}
        <p>
          Já possui conta?
          <a href="" onClick={openLoginModal}>
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;
