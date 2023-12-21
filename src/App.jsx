import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import About from "./views/About";
import ListProjects from "./views/ListProjects";
import Skills from "./views/Skills";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/projects' element={<ListProjects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
