import { createContext } from "react";

export type Theme = {
  mode: string;
};

export const ThemeContext = createContext<Theme>({
  mode: "light",
});
