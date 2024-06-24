import { useState } from "react";
import "./index.less";
import ThemeToggle from "./ThemeToggle.tsx";
import { ThemeContext } from "./context.ts";
import Form from "./MyForm.tsx";

export default function MyApp() {
  const [theme, setTheme] = useState({
    mode: "light",
  });
  return (
    <>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
    </>
  );
}
