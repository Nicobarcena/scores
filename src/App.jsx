import React from "react";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./Componentes/Login";
import Home from "./Componentes/Home";
function App() {
  return (
    <Router>
      
        <Routes  path="/" Component={Login}/>
        <Routes path="/Home" Component={Home}/>
    </Router>
  );
}

export default App;
