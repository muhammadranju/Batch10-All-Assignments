import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeName, setThemeName] = useState(theme);
  const setDarkMood = () => {
    document.querySelector("html").setAttribute("data-theme", theme ?? "light");
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeName("Dark Mode");
      setDarkMood();
    } else {
      setTheme("light");
      setThemeName("Light Mode");
      setDarkMood();
    }
  };
  setDarkMood();
  return <></>;
}

export default App;
