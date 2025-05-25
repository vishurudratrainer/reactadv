import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <nav style={{ backgroundColor: theme.background }}>
      <ul>
        <li style={{ color: theme.text }}>Home</li>
        <li style={{ color: theme.text }}>About</li>
      </ul>

      <span>{user.username}</span>
    </nav>
  );
};

export default Navbar;
