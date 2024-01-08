import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between'>
        <Nav />
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
