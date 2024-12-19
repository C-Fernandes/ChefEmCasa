import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import useFetch from "../hooks/UseFetch";
function Menu() {
  const email = localStorage.getItem("userEmail");
  const { data, error, loading } = useFetch(`user/${email}`);
  const [activeModal, setActiveModal] = useState(null);

  const openLoginModal = (e) => {
    e.preventDefault();
    setActiveModal("login");
  };

  const openRegisterModal = (e) => {
    e.preventDefault();
    setActiveModal("register");
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="menu">
      <h2>ChefEmCasa</h2>
      <div id="nav">
        <a href="/">Inicio</a>
        <a href="/explorar">Explorar</a>
        <a href="/criar">Criar</a>
      </div>
      <div className="input">
        <img src="./icons/searchIcon.png" alt="Icone de busca" />
        <input type="text" placeholder="Pesquise por uma receita" />
      </div>
      <div className="userName" onClick={openLoginModal}>
        <p>{data && data.name ? data.name : "User Name"}</p>
        <span className="initial">
          {data && data.name ? data.name.charAt(0).toUpperCase() : "U"}
        </span>

        {/* Renderiza o modal de login ou registro dependendo do estado */}
        {activeModal === "login" && (
          <LoginModal
            onClose={closeModal}
            openRegisterModal={openRegisterModal}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal onClose={closeModal} openLoginModal={openLoginModal} />
        )}
      </div>
    </div>
  );
}

export default Menu;
