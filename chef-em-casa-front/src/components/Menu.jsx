import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Menu() {
    // Estado que controla qual modal está aberto (login ou registro)
    const [activeModal, setActiveModal] = useState(null);

    const openLoginModal = (e) => {
        e.preventDefault();
        setActiveModal("login");
    };

    // Função para abrir o modal de registro
    const openRegisterModal = (e) => {
        e.preventDefault();  // Impede o comportamento padrão do link (evita o fechamento inesperado)
        setActiveModal("register"); // Define o modal ativo como "register"
    };
    // Função para fechar os modais
    const closeModal = () => {
        setActiveModal(null); // Fecha o modal
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
                <p>User Name</p>
                <span className="initial">U</span>

                {/* Renderiza o modal de login ou registro dependendo do estado */}
                {activeModal === "login" && (
                    <LoginModal
                        onClose={closeModal}
                        openRegisterModal={openRegisterModal}
                    />
                )}
                {activeModal === "register" && (
                    <RegisterModal
                        onClose={closeModal}
                        openLoginModal={openLoginModal}
                    />
                )}
            </div>
        </div>
    );
}

export default Menu;
