import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {children}
    </button>
  );
};

export default Button;
