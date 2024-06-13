import React, { createContext, useContext, useState } from "react";
import "./index.less";

type Theme = {
  mode: string;
};

const ThemeContext = createContext<Theme>({
  mode: "light",
});

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

function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (p: { mode: string }) => void;
}) {
  return (
    <label htmlFor="theme-select">
      主题切换：
      <select
        id="theme-select"
        value={theme.mode} // ...强制选择框的值与 state 相匹配...
        onChange={(e) => setTheme({ mode: e.target.value })} // ... 并在每次改变（change）时更新 state
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}

function Form() {
  return (
    <Panel title={"Create a new account"}>
      <button>Sign up</button> <button>Log in</button>
    </Panel>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { mode } = useContext(ThemeContext);
  const className = `panel-${mode}`;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
