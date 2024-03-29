import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Messages from "./pages/Messages";
import Nav from "./Nav";
import Footer from "./Footer";
import Badingo from "./pages/Badingo";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/badingo' element={<Badingo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
