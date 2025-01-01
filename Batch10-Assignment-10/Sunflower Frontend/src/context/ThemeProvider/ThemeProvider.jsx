/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const setDarkMood = () => {
    if (theme) {
      document.querySelector("#root").setAttribute("class", "dark");
    } else {
      document.querySelector("#root").setAttribute("class", "");
    }
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };
  setDarkMood();

  const themeInfo = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
