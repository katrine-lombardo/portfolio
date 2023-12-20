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
        <img src={domino} className="rounded-lg shadow-2xl..." alt="Vite logo" />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello world</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="font-serif ...">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
