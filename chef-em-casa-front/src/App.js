
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
    if (!localStorage.getItem("initialized")) {
      localStorage.clear();
      localStorage.setItem("initialized", "true");
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explorar' element={<Explore />} />
        <Route path="/criar" element={<PrivateRoute><MyRecipes /></PrivateRoute>} />

        <Route path="/recipe" element={<Recipe numLikes={37} />} />
      </Routes>
    </Router>

  );
}

export default App;
