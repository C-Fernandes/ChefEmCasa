import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    // Redireciona para o login se não estiver autenticado
    return <Navigate to="/" />;
  }

  // Caso contrário, renderiza o conteúdo da rota
  return children;
};

export default PrivateRoute;
