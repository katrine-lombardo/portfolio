import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LoginProvider } from "./components/ContextLogin.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
