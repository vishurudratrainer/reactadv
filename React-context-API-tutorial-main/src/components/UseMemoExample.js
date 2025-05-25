import { useMemo, useContext, createContext } from "react";
import { userData } from "../contexts/UserContext";
import { themes } from "../contexts/ThemeContext";

const AppContext = createContext({
  userData,
  themes,
});

const Card = () => {
  const appContextValue = useContext(AppContext);
  const theme = appContextValue.theme;

  return useMemo(
    () => (
      <div>
        <h2 style={{ color: theme.text }}>This is the Title </h2>
        <p style={{ color: theme.text }}>lorem ipsum dolor sit amet,</p>
      </div>
    ),
    [theme]
  );
};
