import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between'>
        <Nav />
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
