
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MyRecipes from "./pages/MyRecipes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explorar' element={<Explore />} />
        <Route path='/my-recipes' element={<MyRecipes/>}/>
      </Routes>
    </Router>

  );
}

export default App;
