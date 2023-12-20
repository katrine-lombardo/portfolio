import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import About from "./views/About";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Nav from "./Nav";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div>
          <img
            src="domino.jpeg"
            className="rounded-lg shadow-2xl ..."
            alt="Domino"
          />
        </div>
        <h1>Hello Domino</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="font-serif ...">Am I changing?</p>
      </BrowserRouter>
    </>
  );
}

export default App;
