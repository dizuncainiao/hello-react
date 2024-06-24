import { useContext } from "react";
import { ThemeContext } from "./context.ts";

export default function Panel({
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
