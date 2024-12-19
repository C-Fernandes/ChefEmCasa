
import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MyRecipes from "./pages/MyRecipes";
import Recipe from "./pages/Recipe";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  useEffect(() => {
    // Verifica se a aplicação já foi inicializada
    if (!localStorage.getItem("initialized")) {
      localStorage.clear(); // Limpa todos os dados
      localStorage.setItem("initialized", "true"); // Marca como inicializado
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explorar' element={<Explore />} />
        <Route path="/criar" element={<PrivateRoute><MyRecipes /></PrivateRoute>} />

        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>

  );
}

export default App;
