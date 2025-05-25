import { createContext } from "react";

export const userData = {
  username: "danny",
  age: 28,
};

export const UserContext = createContext(userData);
