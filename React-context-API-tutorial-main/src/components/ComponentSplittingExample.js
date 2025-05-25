import { createContext, memo, useContext } from "react";
import { userData } from "../contexts/UserContext";
import { themes } from "../contexts/ThemeContext";

const AppContext = createContext({
  userData,
  themes,
});

const Card = () => {
  const appContextValue = useContext(AppContext);
  const theme = appContextValue.theme;

  return (
    <div>
      <CardTitle theme={theme} />
      <CardDescription theme={theme} />
    </div>
  );
};

const CardTitle = memo(({ theme }) => {
  return <h2 style={{ color: theme.text }}>This is the Title </h2>;
});

const CardDescription = memo(({ theme }) => {
  return <p style={{ color: theme.text }}>lorem ipsum dolor sit amet,</p>;
});
