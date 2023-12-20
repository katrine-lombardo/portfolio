import React from "react";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import domino from "./assets/domino.jpeg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={domino} className="rounded-lg shadow-2xl ..." alt="Domino" />
      </div>
      <h1>Hello Domino</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="font-serif ...">
        Am I changing?
      </p>
    </>
  );
}

export default App;
