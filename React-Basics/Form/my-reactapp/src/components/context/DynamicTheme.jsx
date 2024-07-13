import React, { createContext, useState } from "react";

const ThemeContext = createContext("dark");

function DynamicTheme({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    debugger;
    setTheme({ ...theme, theme: theme === "dark" ? "light" : "dark" });
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, DynamicTheme };
