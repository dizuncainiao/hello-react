import { type Theme } from "./context.ts";

export default function ThemeToggle({
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
