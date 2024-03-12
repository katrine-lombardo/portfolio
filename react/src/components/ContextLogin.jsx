import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());

  const resetTimer = () => {
    setLastActivity(Date.now());
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    const timeout = setTimeout(() => {
      const timeElapsed = Date.now() - lastActivity;
      if (timeElapsed > 5 * 60 * 1000) {
        logout();
      }
    }, 5 * 60 * 1000);

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timeout);
    };
  }, [lastActivity]);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, resetTimer }}>
      {children}
    </LoginContext.Provider>
  );
};
